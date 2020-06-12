import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-experts',
  templateUrl: './my-experts.component.html',
  styleUrls: ['./my-experts.component.scss']
})
export class MyExpertsComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
