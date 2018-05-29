import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NewPostComponent } from './components/new-post/new-post.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';


const appRoutes: Routes = [
  {
    path: '',
    component: PostListComponent
  },
  {
    path: 'new',
    component: NewPostComponent
  },
  {
    path: 'post/:id',
    component: PostDetailComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =
 [ AppComponent,
   NewPostComponent,
   PostListComponent,
   PostDetailComponent,
   EditPostComponent,
 ]
