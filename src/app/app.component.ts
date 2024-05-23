import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, UserListComponent, UserFormComponent, UserDetailComponent]
})
export class AppComponent {
  isUserListRouteActive: boolean = false;
  isUserDetailRouteActive: boolean = false;
  isUserFormRouteActive: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isUserListRouteActive = this.router.isActive('/users', true);
        this.isUserDetailRouteActive = this.router.isActive('/users/:id', true);
        this.isUserFormRouteActive = this.router.isActive('/create', true) || this.router.isActive('/update/:id', true);
      }
    });
  }

  navigateToUsers(): void {
    console.log("Navigating to Users List");
    this.router.navigate(['/users']);
  }
  
  navigateToCreate(): void {
    console.log("Navigating to Create User");
    this.router.navigate(['/create']);
  }
  
}