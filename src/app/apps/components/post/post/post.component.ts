import { ListPostService } from './../../../services/post/list-post/list-post.service';
import { Post } from 'src/app/apps/model/Post';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceblogService } from 'src/app/apps/blog/blog-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  //blogsDetail: Post[] = [];

  posts$ : Post [] = [];

  constructor(public service: ListPostService,
    public router: Router,
    public http: HttpClient) {
      this.service.showEdit = false;
    }

  ngOnInit() {
    this.service.getAllPosts().subscribe(
      (data) => {
        this.posts$ = data;
        console.log("passei aqui " , data);
      }
    )
  }

  viewDetail(id: number) {
    this.service.detailId = id;

    if (this.service.loginStatusService) this.service.showEdit = true;

    this.router.navigate(['/blogDetail', id]);
  }

}
