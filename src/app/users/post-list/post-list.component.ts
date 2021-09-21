import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/shared/model/IUsers';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  public userData: IUser ;
  constructor() { }

  ngOnInit(): void {
    this.userData = history.state.data;
    console.log(this.userData);
  }

}
