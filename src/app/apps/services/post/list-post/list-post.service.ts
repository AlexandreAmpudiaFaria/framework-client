import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListPostService {

  post : Post[];

  api = 'http://localhost:8080/post';

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<Post>(this.api);
  }
}