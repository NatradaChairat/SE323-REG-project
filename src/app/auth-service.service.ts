import { Injectable } from '@angular/core';

@Injectable()
export class AuthServiceService {
  constructor() {}

  login(username: string, password: string) {
    if (easyAuth(username, password)) {
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ username: username, token: token })
      );
    }
  }

  easyAuth(username: string, password: string) {
    if (username === 'student' && password === 'student') {
      return true;
    } else if (username === 'lecturer' && password === 'lecturer') {
      return true;
    } else if (username === 'admin' && password === 'admin') {
      return true;
    } else {
      return false;
    }
  }
}
