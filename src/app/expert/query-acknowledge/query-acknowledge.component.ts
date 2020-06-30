import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-query-acknowledge',
  templateUrl: './query-acknowledge.component.html',
  styleUrls: ['./query-acknowledge.component.scss']
})
export class QueryAcknowledgeComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
