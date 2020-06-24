import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-query',
  templateUrl: './track-query.component.html',
  styleUrls: ['./track-query.component.scss']
})
export class TrackQueryComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
