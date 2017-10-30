import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { Book } from '../interfaces/Book';
import { FormArray } from '@angular/forms';
import { AngularFireList } from 'angularfire2/database';

import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FirebaseService {
  books: AngularFireList<any[]>;
  favoriteBooks: Observable<any>;
  unreadBooks: Observable<any>;
  bookDetails: Observable<any>;

  constructor(private db:AngularFireDatabase) { }

  getBooks(){
    this.books = this.db.list('/books')//.valueChanges() as Observable<any[]>;
    return this.books;
  }

  getFavoriteBooks(){
    this.favoriteBooks = this.db.list('/books').valueChanges() as Observable<any[]>;
    this.favoriteBooks.map(books => {
      const topRatedBooks = books.filter(item => item.rate > 4);
      return topRatedBooks;
    })
    return this.favoriteBooks;
  }

  getUnreadBooks(){
    this.unreadBooks = this.db.list('/books').valueChanges() as Observable<any[]>;
    this.unreadBooks.map(books => {
      const ub = books.filter(item => item.dateread == null);
      return ub;
    })
    return this.unreadBooks;
  }

  getBookDetails(id){
    this.bookDetails = this.db.object('/books/'+id).valueChanges() as Observable<any>;
    return this.bookDetails;
  }

  addBook(bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails)); //removes the undefined fields
    return this.books.push(filteredBook);
    
    
    
  }

  updateBook(id, bookDetails){
    var filteredBook = JSON.parse(JSON.stringify(bookDetails));
    return this.books.update(id, filteredBook);
  }

  deleteBook(id){
    return this.books.remove(id);
  }

}
