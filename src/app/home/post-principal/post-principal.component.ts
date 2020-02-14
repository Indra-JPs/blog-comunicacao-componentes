import { Component, OnInit, Input } from '@angular/core';

import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-post-principal',
  templateUrl: './post-principal.component.html'
})
export class PostPrincipalComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit() {
  }

}
