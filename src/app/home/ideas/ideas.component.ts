import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss']
})
export class IdeasComponent implements OnInit {

  allowBookmark = false;

  constructor() { }

  ngOnInit() {

  }

  mouseEnter() {
    this.allowBookmark = true;
  }

  mouseLeave() {
    this.allowBookmark = false;
  }

}
