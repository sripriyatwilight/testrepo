import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CourseComponent } from './course/course.component';
import { QuestionComponent } from './question/question.component';
import { QuizComponent } from '../quiz/quiz.component';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'course', component: CourseComponent },
      { path: 'quiz', component: QuestionComponent },
      { path: 'quiz2', component: QuizComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
