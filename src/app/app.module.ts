import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './shared/services/users.service';

const users = (userService: UsersService) => {
  return () => {
    return userService.LoadUsers();
  }
}

const posts = (userService: UsersService) => {
  return () => {
    return userService.LoadPost();
  }
}

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],

  providers: [
    { provide: APP_INITIALIZER, useFactory: users, deps: [UsersService], multi: true },
    { provide: APP_INITIALIZER, useFactory: posts, deps: [UsersService], multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
