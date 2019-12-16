import { Component } from '@angular/core';
import { Posts } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'feit-instagram-app';
  myPosts =  Posts;
  public myLog() {
    console.log("what now?");
  }
}
