import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostDetails } from '../model/postDetails';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
    post: PostDetails;

  ngOnInit() {
  }

}
