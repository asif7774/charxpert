import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { SignUpUserModel } from 'src/app/_models/SignUpUserModel';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/_services/Common/Common.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  eventsSubject: Subject<void> = new Subject<void>();
  constructor() {}

  ngOnInit(): void {
  }

  loginModalClick(modalType:any) {
    this.eventsSubject.next(modalType);
  }

}
