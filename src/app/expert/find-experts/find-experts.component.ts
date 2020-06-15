import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-experts',
  templateUrl: './find-experts.component.html',
  styleUrls: ['./find-experts.component.scss']
})
export class FindExpertsComponent implements OnInit {
  currentRate = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
