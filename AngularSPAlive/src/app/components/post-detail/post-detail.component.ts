import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../../services/post.service';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})

export class PostDetailComponent implements OnInit {

  post$: Observable<Post>;
  postId: string;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
  ) {
     route.params.subscribe(p => {
       this.postId = p.id;
     });
  }

  ngOnInit() {
    this.postService.getPost(this.postId)
      .subscribe(data => this.post$ = data);
  }

}
