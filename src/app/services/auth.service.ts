import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor() {}
  login(username: string, password: string) {
    if (this.easyLogin(username, password)) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ username: username, type: username })
      );
      return true;
    }
    return false;
  }
  hasLoggedIn() {}
  easyLogin(username: string, password: string) {
    return (
      (username === 'student' && password === 'student') ||
      (username === 'lecturer' && password === 'lecturer') ||
      (username === 'admin' && password === 'admin')
    );
  }
}
