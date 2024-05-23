import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
  imports: [CommonModule, RouterModule],
  standalone: true
})
export class UserDetailComponent implements OnInit {
  user: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUser(+id).subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {
          this.errorMessage = error;
        }
      );
    } else {
      console.error('ID parameter is missing in the route.');
    }
  }

  deleteUser(id?: number): void {
    id = id || +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.userService.deleteUser(id).subscribe(() => {
      });
    } else {
      console.error('ID parameter is missing in the route.');
    }
  }
}
