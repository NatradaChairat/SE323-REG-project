import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {}

  login(username: string, password: string) {
    if (this.authService.login(username, password)) {
      //retrieve type //this is bad logic for time being
      this.navigateUser(username);
    }
    console.log('CurrentUser: ', localStorage.getItem('currentUser'));
  }

  navigateUser(type: string) {
    if (type === 'student') {
      this.router.navigate(['enrolled-courses']);
    } else if (type === 'lecturer') {
      this.router.navigate(['teaching-courses']);
    } else {
      this.router.navigate(['create-course']);
    }
  }
}
