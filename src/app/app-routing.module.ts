import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnrolledCoursesComponent } from './student/enrolled-courses/enrolled-courses.component';
import { AddCourseComponent } from './student/add-course/add-course.component';
import { TuitionFeeComponent } from './student/tuition-fee/tuition-fee.component';
import { GradeComponent } from './student/grade/grade.component';
import { CoursesComponent } from './lecturer/courses/courses.component';
import { GradeStudentComponent } from './lecturer/grade-student/grade-student.component';
import { CreateCourseComponent } from './admin/create-course/create-course.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create-course', component: CreateCourseComponent },
  { path: 'teaching-courses', component: CoursesComponent },
  { path: 'grade-student', component: GradeStudentComponent },
  { path: 'enroll-course', component: AddCourseComponent },
  { path: 'enrolled-courses', component: EnrolledCoursesComponent },
  { path: 'grade', component: GradeComponent },
  { path: 'tuition-fee', component: TuitionFeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
