import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-secundario',
  templateUrl: './post-secundario.component.html'
})
export class PostSecundarioComponent implements OnInit {

  @Input('post') posts: Post;
  @Output() postLido = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onClickPostLido(post) {
    this.postLido.emit(post);
  }

}
