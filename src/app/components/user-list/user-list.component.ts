import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule] 
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  page: number = 1;
  errorMessage: string = '';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers(this.page).subscribe(
      (data: any) => {
        this.users = data.data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  nextPage(): void {
    this.page++;
    this.loadUsers();
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.loadUsers();
    }
  }
}
