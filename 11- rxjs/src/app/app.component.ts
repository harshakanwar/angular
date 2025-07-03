import { Component, DestroyRef, effect, inject, OnInit, signal } from '@angular/core';
import { concat, interval } from 'rxjs';
import { BookService } from './book.service';
import { Book } from './book.model';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  clickCount = signal(0);
  private destroyRef = inject(DestroyRef);
  books : Book[] =[];

  constructor(private bookService : BookService){

    effect(() =>{
      console.log(`Clicked Button ${this.clickCount()} times`)
    }) 
  }
  ngOnInit(): void {
    // const subscription = interval(1000).subscribe({
    //   next: (val) => console.log(val),
    // });

    // this.destroyRef.onDestroy(() => {
    //   subscription.unsubscribe();
    // });
    this.bookService.getBooks().subscribe((data) => {this.books.push(data);
      console.log(data);
    });
    const book1 ={
    name: "Harhsa",
    category: "Novel",
    author: "Harsha Kanwar",
    publisher: "ABC Publishers",
    edition: "1st"
    }
    this.bookService.createBook(book1).subscribe((data) => {this.books.push(data);
      console.log(data);
    });
    console.log(this.books);
  }


  onClick(){
    this.clickCount.update((x)=> x + 1 );
  }
}
