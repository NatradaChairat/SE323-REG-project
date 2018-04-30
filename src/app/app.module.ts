import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EnrolledCoursesComponent } from './student/enrolled-courses/enrolled-courses.component';
import { AddCourseComponent } from './student/add-course/add-course.component';
import { TuitionFeeComponent } from './student/tuition-fee/tuition-fee.component';
import { GradeComponent } from './student/grade/grade.component';
import { CoursesComponent } from './lecturer/courses/courses.component';
import { GradeStudentComponent } from './lecturer/grade-student/grade-student.component';
import { CreateCourseComponent } from './admin/create-course/create-course.component';

import { AuthService } from './services/auth.service';
import { CourseService } from './services/course.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    EnrolledCoursesComponent,
    AddCourseComponent,
    TuitionFeeComponent,
    GradeComponent,
    CoursesComponent,
    GradeStudentComponent,
    CreateCourseComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpModule],
  providers: [AuthService, CourseService],
  bootstrap: [AppComponent]
})
export class AppModule {}
