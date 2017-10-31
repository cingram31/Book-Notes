import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "../../services/firebase.service";
import { Router, ActivatedRoute } from "@angular/router";
import { AngularFireAction } from 'angularfire2/database';

@Component({
  selector: 'app-delete',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  route: any;
  id: any;
  bookTitle;
  bookDescription; 
  rate;
  imageUrl;
  price;
  dateadded;
  dateread;

  constructor(private firebaseService: FirebaseService, private router: Router, privateroute:ActivatedRoute) { }

  ngOnInit() {
    
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getBookDetails(this.id).subscribe(book => {
      this.bookTitle = book.title;
      this.bookDescription = book.description;
      this.price = book.price;
      this.dateadded = book.dateadded;
      this.dateread = book.dateread;
      this.rate = book.rate;
      this.imageUrl = book.imageUrl;
    });
  }

  removeBook(){
    this.firebaseService.deleteBook(this.id);
    this.router.navigate(['books']);
  }

}
