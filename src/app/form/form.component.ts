import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formData = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    description: ''
  };

  submitForm() {
    console.log('Form data:', this.formData);
    // You can perform further actions like submitting the data to a server here
  }
}
