import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class UserFormComponent implements OnInit {
  user: any = {
    first_name: '',
    last_name: '',
    email: ''
  };
  isEditMode: boolean = false;
  errorMessage: string = '';

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.userService.getUser(+id).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }

  saveUser(): void {
    if (this.isEditMode) {
      this.userService.updateUser(this.user.id, this.user).subscribe(
        () => this.router.navigate(['/user-list']),
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      this.userService.createUser(this.user).subscribe(
        () => this.router.navigate(['/user-list']),
        (error) => {
          this.errorMessage = error;
        }
      );
    }
  }
}
