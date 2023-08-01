/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from '@angular/core';
import { Book } from '../../shared/book';
import { ActivatedRoute } from '@angular/router';
import { BookStoreService } from 'src/app/shared/book-store.service';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent {
  book?: Book;
  constructor(
    private service: BookStoreService,
    private route: ActivatedRoute,
  ) {
    const isbn = this.route.snapshot.paramMap.get('isbn')!;
  }
}
