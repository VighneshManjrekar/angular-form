import { Component } from '@angular/core';
import { Form } from '../app/components/form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  form: Form = {
    name: '',
    email: '',
    gender: '',
    languages: [],
    isMarried: false,
  };
  title = 'angular-form';
  error: { name: string; message: string; isError: boolean }[] = [
    { name: 'name', message: 'Please provide name', isError: false },
    { name: 'email', message: 'Please provide name', isError: false },
    { name: 'gender', message: 'Please provide name', isError: false },
    { name: 'email', message: 'Invalid email', isError: false },
  ];
  checkEmail = () => {
    console.log();
  };
  handleSubmit = () => {};
}
