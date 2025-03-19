import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class JsonFormService {
  constructor(private fb: FormBuilder) {}

  buildForm(schema: any): FormGroup {
    let formGroup: any = {};

    schema.fields.forEach((field: any) => {
      let validators = [];
      if (field.validators?.required) validators.push(Validators.required);
      if (field.validators?.minLength) validators.push(Validators.minLength(field.validators.minLength));
      if (field.validators?.email) validators.push(Validators.email);

      formGroup[field.name] = new FormControl('', validators);
    });

    return this.fb.group(formGroup);
  }
}
