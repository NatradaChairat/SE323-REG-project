import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CourseService {
  constructor(private http: Http) {}

  getCourses() {
    return this.http
      .get('assets/data/course.json')
      .map(res => res.json().courses);
  }
}
