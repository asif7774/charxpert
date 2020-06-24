import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-query-client',
  templateUrl: './track-query-client.component.html',
  styleUrls: ['./track-query-client.component.scss']
})
export class TrackQueryClientComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
