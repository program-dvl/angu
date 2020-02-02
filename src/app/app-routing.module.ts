import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './post-list/post-list.component';
import { AddPostComponent } from './add-post/add-post.component';


const routes: Routes = [
  { path: '', component: PostListComponent },
  { path: 'add', component: AddPostComponent },
  { path: 'edit/:id', component: AddPostComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
