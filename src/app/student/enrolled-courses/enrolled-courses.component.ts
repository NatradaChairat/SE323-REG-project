import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-enrolled-courses',
  templateUrl: './enrolled-courses.component.html',
  styleUrls: ['./enrolled-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {
  courses: any[];

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.courseService
      .getCourses()
      .subscribe(courses => (this.courses = courses));
  }
}
