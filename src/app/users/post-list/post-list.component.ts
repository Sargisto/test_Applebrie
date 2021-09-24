import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/shared/model/IUsers';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public userList: Array<IUser> ;
  public userData: IUser ;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.userList = this.userService.AddPostToUser();
    this.route.params.subscribe(param => {
      this.userData = this.userList.find(u => u.id == param.id);
    });
  }

}
