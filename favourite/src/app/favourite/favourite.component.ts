import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
  //Emulates shadowDOM
  //encapsulation:ViewEncapsulation.Emulated
  //Order in which we apply has priority
  /*styles :[
    `
    .glyphicon
    {
      color:green;
    }
    .glyphicon-star
    {
      color:pink;
    }
    `
  ],*/
  //Another approach of input but problem is hardcoded strings passed to array that may be renamed in future
  //inputs : ["isFavourite"]
})
export class FavouriteComponent implements OnInit {

  @Input('is-favourite') isFavourite = false;
  @Output() change = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick()
  {
    this.isFavourite = !this.isFavourite;
    //Send notification to susbcriber i.e app component here
    this.change.emit({newValue:this.isFavourite});
  }
}
