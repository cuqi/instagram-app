import { Component } from '@angular/core';
import {Posts} from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  total = Posts;

  title = 'feit-instagram-app';
  
  public myLog() {
    console.log("what now?");
  }

}
