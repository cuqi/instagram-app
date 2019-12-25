import { Component, Input, OnInit } from '@angular/core';
import { PostDetails } from '../model/postDetails';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  clicked: number = 1;

  onClickSubmit(formData) {

    let newDiv= document.createElement('div');
    let newContent = document.createTextNode(formData.comment);
    newDiv.appendChild(newContent);
    let currentDiv = document.getElementById("div1");
    currentDiv.parentNode.insertBefore(newDiv, currentDiv); // ne e dobro sega za sega, se dodavaat samo na prviot post
    }

  onLike() {

    let newDiv = document.createElement('div');
    let newContent = document.createTextNode('You like this post!');
    newDiv.appendChild(newContent);
    let currentDiv = document.getElementById('divLikes');
    currentDiv.setAttribute("id", "likeDiv");

    if (this.clicked === 1) {
      currentDiv.parentNode.insertBefore(newDiv, currentDiv);
      //currentDiv.setAttribute('id', 'likeDiv');
      this.clicked = 0;
    }
    else {
      console.log('else');
      let empty = document.createElement('div');
      let emptyContent = document.createTextNode('');
      empty.appendChild(emptyContent);
      currentDiv.replaceWith(empty);
      this.clicked = 1;
    }
  }
  constructor() { }

  @Input()
  posts: PostDetails;

  ngOnInit() {
  }

}
