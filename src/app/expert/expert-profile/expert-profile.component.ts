import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expert-profile',
  templateUrl: './expert-profile.component.html',
  styleUrls: ['./expert-profile.component.scss']
})
export class ExpertProfileComponent implements OnInit {
  currentRate = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
