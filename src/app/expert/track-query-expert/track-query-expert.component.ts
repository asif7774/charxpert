import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-query-expert',
  templateUrl: './track-query-expert.component.html',
  styleUrls: ['./track-query-expert.component.scss']
})
export class TrackQueryExpertComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
