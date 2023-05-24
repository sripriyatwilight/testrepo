import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SloginComponent } from './samples/slogin/slogin.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { PasswordComponent } from './password/password.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // { path: '', redirectTo: 'login', pathMatch: 'full' },
  // { path: 'admin', component: DashboardComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'login2', component: SloginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot', component: ResetComponent },
  // { path: 'welcome', component: WelcomeComponent },
  // { path: 'question', component: QuestionComponent },
  // { path: 'resetpassword', component: PasswordComponent },
  // { path: 'dashboard1', component: SidenavComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
