import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[MessageService]
})
export class LoginComponent {
  api = "http://localhost:3001/api/v1/auth/login/";
  loginForm!: FormGroup;
  checked!: boolean;
  submitted = false;
  showSection1: boolean = false;
  buttonWidth = `'10rem'`;
  images:any[] = [
     {img:'assets/images/zoho1.png',heading:"Heading Sample one",text:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "} ,
     {img:'assets/images/zoho2.png',heading:"Heading Sample two",text:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "} ,
     {img:'assets/images/zoho3.png',heading:"Heading Sample three",text:"lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum "}
    ];

  constructor(private formBuilder: FormBuilder,
    private router: Router, private http:HttpClient, private messageService: MessageService) {
      // this.submitted = true;
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      // email: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      // password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/)]],
      password: ['', Validators.required],
      checked: ['']
    });
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }
  googleClick(){
    return;
  }

  login() {
    console.log("loging",this.loginForm.value);
    return this.http.post(`${this.api}`, this.loginForm.value);
  }
  errorMessage = [{key:'', value:''}];
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      // alert('Your form is not proper data ');
// return;
      // Form is invalid, display error messages
      Object.keys(this.loginForm.controls).forEach(key => {
        const control = this.loginForm.controls[key];
        if (control.invalid ) {
          // Object.assign(this.errorMessage, { key: " `${key}`is required"});
          this.errorMessage[0].key = `${key}`;
          this.errorMessage[0].value = `${key} is required`;
          // console.log(`${key} is required`);

          // return this.loginForm.errors;
        }
      });
      console.log(this.errorMessage[0].value);
    }else{

    // console.log("fome",this.loginForm.value)
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
      alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));
    });
    }
  }

  onReset() {
    this.submitted = false;
    this.loginForm.reset();
  }

}
