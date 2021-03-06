import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from 'src/app/apps/model/Post';

@Injectable({
  providedIn: 'root'
})
export class ListPostService {

  post : Post[] = [];

  detailId: number = -1;
  loginStatusService = false;
  showEdit = false;

  api = 'http://localhost:8080/post';

  constructor(private http: HttpClient) { }

  getAllPosts() {
    return this.http.get<Post[]>(this.api);
  }
}
