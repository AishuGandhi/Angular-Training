import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors = ["Author1","Author2","Author3"];

  getAuthors()
  {
    return this.authors;
  }
}
