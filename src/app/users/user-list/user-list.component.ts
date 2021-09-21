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
    this.userService.GetUsers().subscribe((response: Array<IUser>) => {
      this.userList = response;
      this.getPosts();
    }, (err) => {
      console.log(err);
    });
  }

  getPosts(): void {
    this.userService.GetPost().subscribe((response: Array<IPost>) => {
      this.postList = response;
      this.userList = this.userList.map(item => {
        item.post = this.postList.filter(post => post.userId === item.id);
        return item;
      });

      setTimeout(() => this.loader = false, 3000);
    }, (err) => {
      console.log(err);
    });
  }

  sendItem(item: IUser): void {
    this.router.navigate(['post'], { state: { data: item } });
  }

}
