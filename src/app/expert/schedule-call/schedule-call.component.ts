import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-schedule-call',
  templateUrl: './schedule-call.component.html',
  styleUrls: ['./schedule-call.component.scss']
})
export class ScheduleCallComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ScheduleCallModal(content){
    this.modalService.open(content, {centered: true });
  }

}
