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
 checkbox1(){  //DarkMode

      document.getElementById("mainHTML").classList.toggle('dark');      //menjanje na celata pozadina 
      var d = document.getElementsByClassName("example-card");        //individualnite postovi
      for(let i =0; i<d.length;i++)
      {
        d[i].classList.toggle("example-card-dark");
        d[i].classList.toggle("font");
      }
      document.getElementById("toolbar").classList.toggle('mat-toolbar-dark');     //toolbar gore
      document.getElementById("homebutton").classList.toggle('darkfont');  //home kopceto vo toolbarot
      document.getElementById("searchbar").classList.toggle('darkfont');      //search barot vo toolbarot

      if(this.flag == true){
      document.getElementById("logo").src = "assets/icon.ico";
      this.flag = false;
      }
      else{
      document.getElementById("logo").src = "favicon.ico";
      this.flag = true;
      }
}
}
