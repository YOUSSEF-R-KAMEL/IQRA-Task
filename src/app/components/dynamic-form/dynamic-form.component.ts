import { Component, Input, OnInit, signal } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { PasswordToggleDirective } from '../../directives/password-toggle.directive';

@Component({
  selector: 'app-dynamic-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, PasswordToggleDirective
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  @Input() formSchema: any;
  form!: FormGroup;
  fields = signal<any[]>([]);

  constructor(private fb: FormBuilder, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.fields.set(this.formSchema.fields);
    this.form = this.buildForm(this.formSchema);

    // Restore form state from local storage
    const savedFormState = localStorage.getItem('formState');
    if (savedFormState) {
      const parsedState = JSON.parse(savedFormState);
      this.form.patchValue(parsedState);

      // Restore repeatable fields (e.g., hobbies)
      Object.keys(parsedState).forEach((key) => {
        if (Array.isArray(parsedState[key])) {
          const formArray = this.form.get(key) as FormArray;
          parsedState[key].forEach((item: any) => {
            formArray.push(this.fb.group(item));
          });
        }
      });
    }

    // Save form state to local storage on changes
    this.form.valueChanges.subscribe((value) => {
      localStorage.setItem('formState', JSON.stringify(value));
    });
  }

  buildForm(schema: any): FormGroup {
    let group: any = {};

    schema.fields.forEach((field: any) => {
      if (field.type === 'repeatable') {
        group[field.name] = this.fb.array([], field.validators?.required ? [this.minLengthArray(1)] : []);
      } else {
        let validators = this.getValidators(field.validators);
        group[field.name] = new FormControl('', validators);
      }
    });

    return this.fb.group(group);
  }

  getValidators(validators: any): any[] {
    let validationArray = [];
    if (validators?.required) validationArray.push(Validators.required);
    if (validators?.minLength) validationArray.push(Validators.minLength(validators.minLength));
    if (validators?.email) validationArray.push(Validators.email);
    return validationArray;
  }

  getFieldControls(fieldName: string) {
    return (this.form.get(fieldName) as FormArray).controls;
  }

  addHobby(fieldName: string) {
    const hobbiesArray = this.form.get(fieldName) as FormArray;
    hobbiesArray.push(
      this.fb.group({
        hobby: new FormControl('', Validators.required)
      })
    );
  }

  removeHobby(fieldName: string, index: number) {
    const hobbiesArray = this.form.get(fieldName) as FormArray;
    hobbiesArray.removeAt(index);
  }

  trackByName(field: any): string {
    return field.name;
  }

  trackByValue(option: any): string {
    return option.value;
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
      this.toastr.success('Form submitted successfully!', 'Success');
      localStorage.removeItem('formState');
    } else {
      this.toastr.error('Please fill out all required fields correctly.', 'Error');
    }
  }

  clearFormState() {
    localStorage.removeItem('formState');
    this.form.reset();
    this.toastr.info('Saved progress cleared.', 'Info');
  }

  // Custom validator to ensure the FormArray has at least one item
  minLengthArray(min: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value.length >= min) {
        return null; // Valid
      }
      return { minLengthArray: { requiredLength: min, actualLength: control.value.length } }; // Invalid
    };
  }
}
