import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IPost, IUser } from "../model/IUsers";


@Injectable(
    { providedIn: 'root' }
)

export class UsersService {
    public userList;
    public postList;

    constructor(private httpClient: HttpClient) { }

    LoadUsers(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.httpClient.get(`https://jsonplaceholder.typicode.com/users`)
                .toPromise().then(res => {
                    this.userList = res;
                    resolve();
                })
        });
    }

    LoadPost(): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`)
                .toPromise().then(res => {
                    this.postList = res;
                    resolve();
                })
        });
    }

    AddPostToUser(): Array<IUser> {
        // Variant #1
        // for (let i = 0; i < this.postList.length; i++) {
        //   const userId = this.postList[i]['userId'] - 1;
        //   this.userList[userId]['posts'] ? this.userList[userId]['posts'].push(this.postList[i]) : this.userList[userId]['posts'] = [this.postList[i]];
        // }

        // Variant #2
        //  this.userList = this.userList.map(item => {
        //   item.posts = this.postList.filter(post => post.userId === item.id);
        //   return item;
        // });

        // Variant #3
        let postsByUsers = {}
        for (let i = 0; i < this.postList.length; i++) {
            const userId = this.postList[i]['userId'];
            postsByUsers[userId] ? postsByUsers[userId].push(this.postList[i]) : postsByUsers[userId] = [this.postList[i]];
        }
        for (let i = 0; i < this.userList.length; i++) {
            if (postsByUsers[i]) {
                this.userList[i]["posts"] = postsByUsers[i];
            } else {
                continue;
            }
        }
        return this.userList;
    }

    GetUsers() {
        return this.userList;
    }

    GetPosts() {
        return this.postList;
    }

}

