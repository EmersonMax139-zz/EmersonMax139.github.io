import { Component, OnInit } from '@angular/core';
import { PostService, Post } from '../../services/post.service'
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit {

  posts$: Observable<Post[]>

  private selectedId: number;


  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => this.posts$ = data.posts);
  }


  // ngOnInit() {
  //   this.posts$ = this.route.paramMap.pipe(
  //     switchMap((params: ParamMap) => {
  //       // (+) before `params.get()` turns the string into a number
  //       this.selectedId = +params.get('id');
  //       return this.postService.getPosts();
  //     })
  //   );
  // }


}
