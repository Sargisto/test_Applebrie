import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserListComponent } from './user-list/user-list.component';
import { UsersRoutingModule } from "./users-routing.module";
import { LoaderComponent } from "../loader/loader.component";
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [UserListComponent, LoaderComponent, PostListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
  ]
})
export class UsersModule {}

