import { Component } from '@angular/core';
import { FeitgramServiceService } from './feitgram-service.service';
import { PostDetails, addComment, gg } from './model/postDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  thePosts: PostDetails[] = [];
  flag = true;

    // * inicijaliziranje na postovite preku service
  constructor(public apiService: FeitgramServiceService) {
    this.apiService.getPosts().subscribe((recievedPosts) => {
      this.thePosts = recievedPosts;
    });
  }

  ngInit() { }

  onClickSubmit(formData) { // search in toolbar
    alert('You searched for: ' + formData.search + ', but this webpage is kinda basic, sorry for the inconvenience!');
  }

  checkbox1() {  // DarkMode
    document.getElementById('mainHTML').classList.toggle('dark');     // menjanje na celata pozadina
    const d = document.getElementsByClassName('example-card');        // individualnite postovi
    const dd = document.getElementsByClassName('commentbutton');      // Comment zborot vo kopceto
    const ddd = document.getElementsByClassName('post-comment');      // Font na komentarot
    const dddd = document.getElementsByClassName('location');         // location delot
    for (let i = 0; i < d.length; i++) {
      d[i].classList.toggle('example-card-dark');
      d[i].classList.toggle('font');
      dd[i].classList.toggle('font');
      ddd[i].classList.toggle('font');
      dddd[i].classList.toggle('locationfont');

    }

    document.getElementById('toolbar').classList.toggle('mat-toolbar-dark');    // toolbar gore
    document.getElementById('homebutton').classList.toggle('darkfont');         // home kopceto vo toolbarot
    document.getElementById('searchbar').classList.toggle('darkfont');          // search barot vo toolbarot fontot koga kje se napise nesto
    document.getElementsByClassName('example-form-field')[0].classList.toggle('darkplaceholder');

    if (this.flag === true) {
      (document.getElementById('logo') as HTMLImageElement).src = 'assets/icon.ico';
      this.flag = false;
    } else {
      (document.getElementById('logo') as HTMLImageElement).src = 'favicon.ico';
      this.flag = true;
    }
  }
}
