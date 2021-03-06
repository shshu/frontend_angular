import { Component, OnInit } from '@angular/core';
import { Post } from '../models/Posts';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  title: string = "Posts";
  posts: Post[] = [];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe(res => {
      res.forEach((post) =>{
        post['votes'] = 1;
      })
      this.posts = res;
    })
  }

  hidePost(post: Post): void {
    this.posts = this.posts.filter(p => p.id !== post.id);
  }

  addPost(post: Post): void {
    this.posts.unshift(post);
    alert('New post added');
  }

}
