import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';




export class Post {
  constructor (
    id: String,
    name: String,
    title: String,
    post: String,
  ) { }
}

@Injectable({
  providedIn: 'root'
})

export class PostService {

  private apiUrl = 'http://localhost:8081/posts';

  getPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addPost(post: Post): Observable<any> {
    return this.http.post(this.apiUrl, post);
  }

  getPost(id: string): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/' + id);
  }


  constructor( private http: HttpClient,
  private postService: PostService ) { }

}
