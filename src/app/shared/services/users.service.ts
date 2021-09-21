import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable(
    { providedIn: 'root' }
)

export class UsersService {
    public step = 1;
    constructor(private httpClient: HttpClient) {
    }

    GetUsers(): Observable<Object> {
        return this.httpClient.get(`https://jsonplaceholder.typicode.com/users`);
    }

    GetPost(): Observable<Object> {
        return this.httpClient.get(`https://jsonplaceholder.typicode.com/posts`);
    }

}