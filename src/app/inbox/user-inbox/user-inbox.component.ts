import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-inbox',
  templateUrl: './user-inbox.component.html',
  styleUrls: ['./user-inbox.component.scss']
})
export class UserInboxComponent implements OnInit {
  page = 4;
  constructor() { }

  ngOnInit(): void {
  }

}
