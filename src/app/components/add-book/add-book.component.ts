import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
//import { AppDateAdapter } from "../../adapter/AppDateAdapter";

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  dateAdapter: any;
  author;
  title;
  price;
  dateadded;
  dateread;
  description;
  imageUrl;
  rate;

  isRead: boolean = false;
  constructor(private firebaseService:FirebaseService, private router:Router) { }

  ngOnInit() {
  }

  updateDateAdded(dateAdded){
    this.dateadded = this.dateAdapter.format(dateAdded, "input");
  }

  updateDateRead(dateRead){
    this.dateread = this.dateAdapter.format(dateRead, "input");
    this.isRead = true;
  }

  submitAdd(){
    let book = {
      author: this.author,
      title: this.title,
      price: this.price,
      dateadded: this.dateadded,
      dateread: this.dateread,
      description: this.description,
      rate: this.rate,
      imageUrl: this.imageUrl
    }

    this.firebaseService.addBook(book);
    this.router.navigate(['books']);
  }

}
