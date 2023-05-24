import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { catchError, throwError } from 'rxjs';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss'],
  providers:[MessageService]
})
export class ResetComponent implements OnInit {
  api = "http://localhost:3001/api/v1/auth/resetpswd/";
  loginForm!: FormGroup;
  checked!: boolean;
  submitted = false;
  showSection1: boolean = false;
  buttonWidth = `'10rem'`;

  constructor(private formBuilder: FormBuilder,
    private router: Router, private http:HttpClient, private messageService: MessageService) {
      // this.submitted = true;
    }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  get loginFormControl(){
    return this.loginForm.controls;
  }

  login() {
    console.log("loging",this.loginForm.value);
    return this.http.post(`${this.api}`, this.loginForm.value);
  }


  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      // alert('Your form is not proper data ');
return;
    //   // Form is invalid, display error messages
    //   Object.keys(this.loginForm.controls).forEach(key => {
    //     const control = this.loginForm.controls[key];
    //     if (control.invalid ) {
    //       console.log(`${key} is required`);
    //       return this.loginForm.errors;
    //     }
    //   });
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











  // api = "http://localhost:3001/api/v1/auth/forgotpswd/";
  // loginForm!: FormGroup;
  // checked!: boolean;
  // submitted = false;

  // showSection1: boolean = false;
  // buttonWidth = `'10rem'`;
  // images:any[] = [
  //   "assets/images/img1.jpg",
  //   'assets/images/img2.jpg',
  //   'assets/images/img3.jpg'
  // ];
  // constructor(private formBuilder: FormBuilder,
  //   private router: Router, private http:HttpClient) {
  //     this.submitted = true;
  //   }

  // ngOnInit(): void {
  //   this.loginForm = this.formBuilder.group({
  //     email: ['', [Validators.required, Validators.email]],
  //     checked: ['']
  //   });
  // }
  // get f() { return this.loginForm.controls; }


  // login() {
  //   console.log("loging",this.loginForm.value);
  //   return this.http.post(`${this.api}`, this.loginForm.value);
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   // stop here if form is invalid
  //   if (this.loginForm.invalid) {
  //     return;
  //   }

  //   console.log("fome",this.loginForm.value)
  //   // display form values on success
  //   alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));

  //   this.login().pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       if (error.status === 404) {
  //         this.showSection1 = true;
  //         console.error('Resource not found');
  //       } else {
  //         this.showSection1 = true;
  //         console.error('An error occurred:', error.error.message);
  //       }
  //       return throwError('Something bad happened; please try again later.');
  //     })
  //   ).subscribe(data => {
  //     this.router.navigate(["login"])
  //     console.log("dfdfd",data);
  //   });
  // }

  // onReset() {
  //   this.submitted = false;
  //   this.loginForm.reset();
  // }


}
