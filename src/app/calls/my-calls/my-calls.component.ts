import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-calls',
  templateUrl: './my-calls.component.html',
  styleUrls: ['./my-calls.component.scss']
})
export class MyCallsComponent implements OnInit {
  currentRate = 8;

  constructor() { }

  ngOnInit(): void {
  }

}
