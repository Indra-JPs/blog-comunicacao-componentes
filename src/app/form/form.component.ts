import { Component, OnInit } from '@angular/core';

import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  providers: [PostService]
})
export class FormComponent implements OnInit {

  post: Post = new Post();

  constructor(private postService: PostService) { }

  ngOnInit() {
    console.log('Page form');
  }

  onSubmit() {
    this.postService.salvar(this.post);
  }
}
