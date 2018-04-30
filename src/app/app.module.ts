import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { StudentComponent } from './student/student.component';

import { CourseComponent } from './course/course.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { ListStudentComponent } from './student/list-student/list-student.component';
import { ViewStudentComponent } from './student/view-student/view-student.component';
import { AddCourseComponent } from './course/add-course/add-course.component';
import { ListCourseComponent } from './course/list-course/list-course.component';
import { FeeStudentComponent } from './student/fee-student/fee-student.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    StudentComponent,
    CourseComponent,
    AddStudentComponent,
    ListStudentComponent,
    ViewStudentComponent,
    AddCourseComponent,
    ListCourseComponent,
    FeeStudentComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
