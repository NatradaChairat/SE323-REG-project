import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { FeeStudentComponent } from './student/fee-student/fee-student.component';
import { WelcomeComponent } from './welcome/welcome.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'courses', component: ListCourseComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'student', component: ViewStudentComponent },
  { path: 'add-student', component: AddStudentComponent },
  { path: 'students', component: ListStudentComponent },
  { path: 'fee-student', component: FeeStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
