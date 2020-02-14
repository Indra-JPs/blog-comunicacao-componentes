import { Component, OnInit, Input } from '@angular/core';

import { Post } from '../models/post.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  postPrincipal: Post = {
    titulo: 'Meu post principal',
    autor: '',
    data: '',
    conteudo: 'Multiple lines of text that form the lede, informing new readers quickly and efficiently about what’s most interesting in this post’s contents.'
  };

  postsSecundarios: Post[] = [
    {
      titulo: 'Post 1',
      autor: '',
      data: '',
      conteudo: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    },
    {
      titulo: 'Post 2',
      autor: '',
      data: '',
      conteudo: 'This is a wider card with supporting text below as a natural lead-in to additional content.'
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log('Page home');
  }

  postLido(event) {
    alert(`meu post ${event.titulo} foi lido!`);
  }

}
