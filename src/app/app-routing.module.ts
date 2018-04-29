import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddCourseComponent} from "./course/add-course/add-course.component";
import {ListCourseComponent} from "./course/list-course/list-course.component";
import {ViewStudentComponent} from "./student/view-student/view-student.component";
import {ListStudentComponent} from "./student/list-student/list-student.component";
import {AddStudentComponent} from "./student/add-student/add-student.component";

const appRoutes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {
    path: 'login',
    component: LoginComponent
  },
  {path: 'courses', component:ListCourseComponent},
  {path: 'add-course', component: AddCourseComponent},
  {path: 'student/:id',component: ViewStudentComponent},
  {path: 'add-student', component: AddStudentComponent },
  {path: 'students', component: ListStudentComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
