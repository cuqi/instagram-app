import { Component } from '@angular/core';
import { Posts } from '../db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  total = Posts;

  title = 'feit-instagram-app';

  myPosts =  Posts;

  public myLog() {
    console.log("what now?");
  }
flag = true;
 checkbox1(){

    if(this.flag)
    {
      document.getElementById("mainHTML").style.backgroundColor = "#020238";
      this.flag = false;
      document.getElementById("toolbar").classList.add('mat-toolbar-dark');
      document.getElementById("homebutton").style.color = "#020238";
      document.getElementById("searchbar").style.color = "#020238";
    }
    else{
      document.getElementById("mainHTML").style.backgroundColor = "#F3EDDE";
      this.flag = true;
      document.getElementById("homebutton").style.color = "#d659d6";
      document.getElementById("toolbar").classList.remove('mat-toolbar-dark');
      document.getElementById("searchbar").style.color = "#d659d6";
    }
    console.log("kalajasfh");
  }
}
