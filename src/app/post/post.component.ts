import { Component, Input, OnInit } from '@angular/core';
import { PostDetails } from '../model/postDetails';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {


  clicked: number = 0;
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
    currentDiv.parentNode.insertBefore(newDiv, currentDiv);
    
  }
  constructor() { }

  @Input()
  posts: PostDetails;

  ngOnInit() {
  }

}
