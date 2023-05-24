import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent {
  api = "http://localhost:3001/api/v1/auth/login/";
  passwordForm!: FormGroup;
  checked!: boolean;
  submitted = false;
  showSection1: boolean = false;
  buttonWidth = `'10rem'`;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private http:HttpClient) {
      // this.submitted = true;
      this.passwordForm = this.formBuilder.group({
        newpassword: ['', [Validators.required, Validators.minLength(8)]],
          // newpassword: ['', [Validators.required, Validators.minLength(8),
          //   Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/)]],
        repassword: ['', Validators.required],
      },{
        validator: this.ConfirmedValidator('newpassword', 'repassword')
      })
    }


  get passwordFormControl(){
    return this.passwordForm.controls
  }

  ConfirmedValidator(controlName: string, matchingControlName: string){
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];
        if (matchingControl.errors && !matchingControl.errors['confirmedValidator']) {
            return;
        }
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ confirmedValidator: true });
        } else {
            matchingControl.setErrors(null);
        }
      }}


  login() {
    console.log("loging",this.passwordForm.value);
    console.log("loging",this.passwordForm.value['newpassword']);
    return this.http.post(`${this.api}`, this.passwordForm.value);
  }
  errorMessage = [{key:'', value:''}];

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.passwordForm.invalid) {
      // alert('Your form is not proper data ');
// return;
      // Form is invalid, display error messages
      Object.keys(this.passwordForm.controls).forEach(key => {
        const control = this.passwordForm.controls[key];
        if (control.invalid ) {
          // Object.assign(this.errorMessage, { key: " `${key}`is required"});
          this.errorMessage[0].key = `${key}`;
          this.errorMessage[0].value = `${key} is required`;
          // console.log(`${key} is required`);

          // return this.passwordForm.errors;
        }
      });
      console.log(this.errorMessage[0].value);
    }else{

    // console.log("fome",this.passwordForm.value)
    // display form values on success

    this.login().pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          this.showSection1 = true;
          console.error('Resource not found');
        } else {
          this.showSection1 = true;
          console.error('An error occurred:', error.error.message);
        }
        return throwError('Something bad happened; please try again later.');
      })
    ).subscribe(data => {
      this.router.navigate(["welcome"])
      console.log("dfdfd",data);
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.passwordForm.value, null, 4));
    });
    }
  }

}
