import { Component, Input, OnInit } from '@angular/core';
import { PostDetails } from '../model/postDetails';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor() { }

  @Input()
  posts: PostDetails;

  ngOnInit() {
  }

}
