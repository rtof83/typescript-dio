import {Injectable} from "@angular/core";
import {Book} from "./model/books.model";

export const books: Book[] = [
    { id: '1', name: 'Book1' , price: 10, quantity: 1, category: "Acao", img:"img1"},
    { id: '2', name: 'Book2' , price: 10, quantity: 1, category: "Acao", img:"img2"},
    { id: '3', name: 'Book3' , price: 10, quantity: 1, category: "Acao", img:"img3"},

  ];

@Injectable()

export class BooksService {
    getBooks(){
        return books;
    }
}
