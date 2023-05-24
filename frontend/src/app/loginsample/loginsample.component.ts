import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface MyObject {
  [key: string]: any;
}
@Component({
  selector: 'app-loginsample',
  templateUrl: './loginsample.component.html',
  styleUrls: ['./loginsample.component.scss']
})
export class LoginsampleComponent {

  registerForm!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', [Validators.required]],
      password: ['', Validators.compose([Validators.required])],
      confirmPassword: ['', [Validators.required]],
    }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      console.table(this.registerForm.value);
    }
  }
}
