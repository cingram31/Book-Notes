import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Book } from "../../interfaces/Book";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  favoriteBooks: any;
  unreadBooks: any;
  

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getFavoriteBooks().subscribe(favBooks => {
      this.favoriteBooks = favBooks;
      console.log(this.favoriteBooks[0].payload.val());
    })

    this.firebaseService.getUnreadBooks().subscribe(ubBooks => {
      this.unreadBooks = ubBooks;
      console.log('Unread Books', this.unreadBooks);
    })
  }

}
