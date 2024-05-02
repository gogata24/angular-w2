import { Component, Input, OnInit } from '@angular/core';
import { IBook } from '../../api/book';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  providers: [MessageService, ConfirmationService],
})
export class BookComponent implements OnInit {
  book?: IBook;
  originalBook?: IBook;
  index: number = 0;
  books?: IBook[];
  currentRating?: number;
  isRated: boolean = false;
  isFinished: boolean = false;
  finishButton: boolean = true;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {
    this.books = [
      {
        id: 1,
        title: 'Под игото',
        shortDescription:
          '„Под игото“ е роман в три части от българския писател Иван Вазов, цялостно публикуван за първи път през 1894 г. ',
        author: ['Иван Вазов', 'Тест тест'],
        rating: [],
      },
      {
        id: 2,
        title: 'Железният светилник',
        shortDescription:
          '„Железният светилник“ е исторически роман и първата книга от известната тетралогия на Димитър Талев',
        author: ['Димитър Талев'],
        rating: [],
      },
      {
        id: 3,
        title: 'Престъпление и наказание',
        shortDescription:
          '„Престъпление и наказание“ е роман на руския писател Фьодор Достоевски, публикуван за първи път през 1866 година.',
        author: ['Фьодор Достоевски'],
        rating: [],
      },
      {
        id: 4,
        title: 'Грозната луна',
        shortDescription:
          '„Грозната луна“ е роман на българския писател Димитър Димов, издаден за пръв път през 1929 година.',
        author: ['Димитър Димов'],
        rating: [],
      },
      {
        id: 5,
        title: 'Алиса в страната на чудесата',
        shortDescription:
          '„Алиса в страната на чудесата“ е фантастичен роман на английския писател Луис Карол, публикуван през 1865 година.',
        author: ['Луис Карол'],
        rating: [],
      }
    ];
  }

  ngOnInit(): void {
    this.getNextBook();
  }

  getNextBook() {
    this.book = this.books![this.index];
    this.originalBook = { ...this.book };
    this, (this.isRated = false);
    if (this.index < this.books!.length) {
      this.index++;
    } else {
      this.isFinished = true;
    }
    this.currentRating = undefined;
  }
  confirmChanges() {
    if (this.checkChanges()) {
      this.confirmationService.confirm({
        key: 'cd',
        header: 'Внимание',
        message: 'Има незапазени промени. Желаете ли да продължите?',
        accept: () => {
          this.book = { ...this.originalBook! };
          this.getNextBook();
        },
        reject: () => {},
      });
    } else {
      this.getNextBook();
    }
  }

  setRating() {
    this.book?.rating.push(this.currentRating!);
    this.currentRating = 0;
    this.book?.rating.map((r) => (this.currentRating! += r));

    this.currentRating /= this.book!.rating.length;
    this.isRated = true;
  }

  editBook() {
    if (this.checkChanges()) {
      this.originalBook = { ...this.book! };
      this.messageService.add({
        severity: 'success',
        summary: 'Редактирана!',
        detail: 'Промените са запазени успешно.',
      });
    } else
      [
        this.messageService.add({
          severity: 'warn',
          summary: 'Внимание!',
          detail: 'Няма направени промени.',
        }),
      ];
  }

  checkChanges(): boolean {
    if (JSON.stringify(this.book) != JSON.stringify(this.originalBook)) {
      return true;
    }
    return false;
  }

  startAgain() {
    this.index = 0;
    this.isFinished = false;
    this.getNextBook();
    if (isNaN(this.currentRating!)) {
      console.log(this.book?.rating);
      this.currentRating = 0;
      this.book?.rating.map((r) => (this.currentRating! += r));
    }
    this.currentRating! /= this.book!.rating.length;
  }
  end() {
    this.messageService.add({
      severity: 'success',
      summary: 'Успех!',
      detail: 'Бладодарим ви, че оценихте всички книги!',
    });
    this.finishButton = false;
  }
}
