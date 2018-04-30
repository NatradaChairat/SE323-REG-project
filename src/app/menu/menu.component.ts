import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  isStudent: boolean;
  isLecturer: boolean;
  isAdmin: boolean;
  hasLoggedIn: boolean;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
    this.authService.isStudent.subscribe(
      isStudent => (this.isStudent = isStudent)
    );
    this.authService.isLecturer.subscribe(
      isLecturer => (this.isLecturer = isLecturer)
    );
    this.authService.isAdmin.subscribe(isAdmin => (this.isAdmin = isAdmin));
    this.authService.hasLoggedIn.subscribe(
      hasLoggedIn => (this.hasLoggedIn = hasLoggedIn)
    );
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['welcome']);
  }
}
