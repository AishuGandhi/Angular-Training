import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html'
})
export class AuthorsComponent implements OnInit {

  title = "Authors List";
  authors;
  constructor(service:AuthorsService) {
      this.authors = service.getAuthors();
      this.title = this.authors.length+this.title;
  }

  ngOnInit(): void {
  }

}
