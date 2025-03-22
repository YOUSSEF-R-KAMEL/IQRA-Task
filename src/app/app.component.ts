import { Component } from '@angular/core';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DynamicFormComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  formSchema = {
    fields: [
      {
        name: 'fullName',
        label: 'Full Name',
        type: 'text',
        placeholder: 'Enter your name',
        validators: { required: true },
      },
      {
        name: 'email',
        label: 'Email',
        type: 'email',
        placeholder: 'Enter your email',
        validators: { required: true, email: true },
      },
      {
        name: 'password',
        label: 'Password',
        type: 'password',
        placeholder: 'Enter password',
        validators: { required: true, minLength: 6 },
      },
      {
        name: 'gender',
        label: 'Gender',
        type: 'select',
        options: [
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
        ],
      },
      { name: 'subscribe', label: 'Subscribe to newsletter', type: 'checkbox' },
      {
        name: 'hobbies',
        label: 'Hobbies',
        type: 'repeatable',
        subFields: [
          {
            name: 'hobby',
            label: 'Hobby',
            type: 'text',
            placeholder: 'Enter hobby',
            validators: { required: true },
          },
        ],
      },
    ],
  };
}
