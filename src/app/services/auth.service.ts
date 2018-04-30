import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {
  private isStudentSrc = new BehaviorSubject<boolean>(false);
  isStudent = this.isStudentSrc.asObservable();
  private isLecturerSrc = new BehaviorSubject<boolean>(false);
  isLecturer = this.isLecturerSrc.asObservable();
  private isAdminSrc = new BehaviorSubject<boolean>(false);
  isAdmin = this.isAdminSrc.asObservable();

  private hasLoggedInSrc = new BehaviorSubject<boolean>(false);
  hasLoggedIn = this.hasLoggedInSrc.asObservable();

  constructor() {
    if (localStorage.getItem('currentUser')) {
      this.initRole();
      this.changeHasLoggedIn(true);
    }
  }

  initRole() {
    let roleTemp: any = JSON.parse(localStorage.getItem('currentUser')).type;
    if (roleTemp.toUpperCase() === 'STUDENT') {
      this.changeIsStudent(true);
      this.changeIsLecturer(false);
      this.changeIsAdmin(false);
    } else if (roleTemp.toUpperCase() === 'LECTURER') {
      this.changeIsStudent(false);
      this.changeIsLecturer(true);
      this.changeIsAdmin(false);
    } else {
      this.changeIsStudent(false);
      this.changeIsLecturer(false);
      this.changeIsAdmin(true);
    }
  }

  changeIsLecturer(isLecturer: boolean) {
    this.isLecturerSrc.next(isLecturer);
  }

  changeIsAdmin(isAdmin: boolean) {
    this.isAdminSrc.next(isAdmin);
  }

  changeIsStudent(isStudent: boolean) {
    this.isStudentSrc.next(isStudent);
  }

  changeHasLoggedIn(hasLoggedIn: boolean) {
    this.hasLoggedInSrc.next(hasLoggedIn);
  }

  login(username: string, password: string) {
    if (this.easyLogin(username, password)) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ username: username, type: username })
      );
      this.initRole();
      this.changeHasLoggedIn(true);
      return true;
    }
    return false;
  }
  getHasLoggedIn() {
    return this.hasLoggedIn;
  }
  easyLogin(username: string, password: string) {
    return (
      (username === 'student' && password === 'student') ||
      (username === 'lecturer' && password === 'lecturer') ||
      (username === 'admin' && password === 'admin')
    );
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.changeHasLoggedIn(false);
    this.changeIsStudent(false);
    this.changeIsLecturer(false);
    this.changeIsAdmin(false);
    console.log('CurrentUser: ', localStorage.getItem('currentUser'));
  }
}
