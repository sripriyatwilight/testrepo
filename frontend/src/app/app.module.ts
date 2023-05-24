import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { ResetComponent } from './reset/reset.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidemenuComponent } from './dashboard/sidemenu/sidemenu.component';
import { SidebarModule } from 'primeng/sidebar';
import { MenubarModule } from 'primeng/menubar';

import { AvatarModule } from 'primeng/avatar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { HttpClientModule } from '@angular/common/http';
import { SliderComponent } from './common/slider/slider.component';
import { CheckboxModule } from 'primeng/checkbox';
import { SloginComponent } from './samples/slogin/slogin.component';
import { WelcomeComponent } from './dashboard/welcome/welcome.component';
import { QuestionComponent } from './dashboard/question/question.component';
import { RouterModule } from '@angular/router';
import { ChangeBgDirective } from './dashboard/question/change-bg.directive';
import { MessageModule } from 'primeng/message';
import { LoginsampleComponent } from './loginsample/loginsample.component';
import { InputTextModule } from 'primeng/inputtext';
import { RedBorderDirective } from './login/red-border.directive';
import { TestingComponent } from './samples/testing/testing.component';
import { PasswordComponent } from './password/password.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SublevelMenuComponent } from './sidenav/sublevel-menu.component';
import { DashboardRoutingModule } from './dashboard/dashboard-routing.module';
import { QuizComponent } from './quiz/quiz.component';
import { environment } from './evironments/environment';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ResetComponent,
    DashboardComponent,
    SidemenuComponent,
    SliderComponent,
    SloginComponent,
    WelcomeComponent,
    QuestionComponent,
    ChangeBgDirective,
    LoginsampleComponent,
    RedBorderDirective,
    TestingComponent,
    PasswordComponent,
    SidenavComponent,
    SublevelMenuComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FieldsetModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    TagModule,
    SidebarModule,
    MenubarModule,
    AvatarModule,
    PanelMenuModule,
    CheckboxModule,
    RouterModule,
    MessageModule,
    InputTextModule,
    DashboardRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
