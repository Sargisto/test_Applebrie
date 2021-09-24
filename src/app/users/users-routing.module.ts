import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostListComponent } from "./post-list/post-list.component";
import { UserListComponent } from "./user-list/user-list.component";

const routes: Routes = [
  {
    path: "",
    component: UserListComponent,
  },
  {
    path: "user",
    component: UserListComponent,
  },
  {
    path: "post/:id",
    component: PostListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}