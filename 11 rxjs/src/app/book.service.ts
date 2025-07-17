import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './book.model';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private getUrl = 'http://localhost:8080/book/1';
  private createUrl = 'http://localhost:8080/book';

  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book> {
    return this.http.get<Book>(this.getUrl);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.createUrl, book);
  }

}
