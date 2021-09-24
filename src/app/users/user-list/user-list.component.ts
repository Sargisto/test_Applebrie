import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPost, IUser } from 'src/app/shared/model/IUsers';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public loader = true;
  public userList: Array<IUser>;
  public postList: Array<IPost>;

  constructor(
    private router: Router,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userList = this.userService.GetUsers();
    this.getPosts();
  }

  getPosts(): void {
    this.postList = this.userService.GetPosts();
    this.loader = false;
  }

}
