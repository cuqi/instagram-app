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

  myPosts = Posts;

  ngInit() {

  }

  onClickSubmit(formData) {
    alert('You searched for: ' + formData.search + ', but this webpage is basic, sorry!');
  }
  flag = true;
  checkbox1() {  // DarkMode
    
    document.getElementById('mainHTML').classList.toggle('dark');      // menjanje na celata pozadina
    var d = document.getElementsByClassName('example-card');        // individualnite postovi
    var dd = document.getElementsByClassName('commentbutton');      //Comment zborot vo kopceto
    var ddd = document.getElementsByClassName('post-comment');      //Font na komentarot 
    var dddd = document.getElementsByClassName('location');         //location delot
    for (let i = 0; i < d.length; i++) {
      d[i].classList.toggle('example-card-dark');
      d[i].classList.toggle('font');
      dd[i].classList.toggle('font');
      ddd[i].classList.toggle('font');
      dddd[i].classList.toggle('locationfont');

    }
    document.getElementById('toolbar').classList.toggle('mat-toolbar-dark');     // toolbar gore
    document.getElementById('homebutton').classList.toggle('darkfont');  // home kopceto vo toolbarot
    document.getElementById('searchbar').classList.toggle('darkfont');      // search barot vo toolbarot fontot koga kje se napise nesto
    document.getElementsByClassName("example-form-field")[0].classList.toggle("darkplaceholder");

    if (this.flag == true) {
      (<HTMLImageElement>document.getElementById('logo')).src = "assets/icon.ico";
      this.flag = false;
    } else {
      (<HTMLImageElement>document.getElementById('logo')).src = "favicon.ico";
      this.flag = true;
    }
  }
}
