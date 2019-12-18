import { Component, Input, OnInit } from '@angular/core';
import { PostDetails } from '../model/postDetails';
import { NgForm } from'@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
    console.log('yeye is there a problem?');
    
  }
  constructor() { }

  @Input()
  posts: PostDetails;

  ngOnInit() {
  }

}
