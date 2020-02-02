import { Component, OnInit } from '@angular/core';
import { PostApiService } from '../post-api.service';

import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: any = [];
  constructor(private api: PostApiService,private activatedRoute: ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.getList();
  }

  getList(){
    this.api.getData()
        .subscribe(data => {
          this.posts = data;
        });
  }
  
  delete(id){
    this.api
          .deleteData(id)
          .subscribe(resp => {
            this.getList();
          });
  }

}
