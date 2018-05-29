import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service'
import { Post } from '../../post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})

export class NewPostComponent implements OnInit {

  public posts = [];

  public name = "";
  public title = "";
  public post = "";

  public newPost: Post;


  // this function is attached to the
  // <form> element itself,
  // with ngSubmit(). It is then run when the <button type="submit">
  // is clicked.
  addPost() {
    this.newPost = {
      name: this.name,
      title: this.title,
      post: this.post,
    }
    // Subscription here is crucial
    this.postService.addPost(this.newPost)
      .subscribe(post => this.posts.push(post));
    this.router.navigate(['/']);
  }


  constructor(private postService: PostService,
              private router: Router) {}

  // Even though the posts do not display in this component,
  // the posts must still be subscribed to in order to push
  // the new post to the array.
  ngOnInit() {
    this.postService.getPosts()
      .subscribe(data => this.posts = data.posts);
  }


}
