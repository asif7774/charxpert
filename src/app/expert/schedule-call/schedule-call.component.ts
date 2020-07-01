import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'app-schedule-call',
  templateUrl: './schedule-call.component.html',
  styleUrls: ['./schedule-call.component.scss']
})
export class ScheduleCallComponent implements OnInit {

  view: CalendarView = CalendarView.Day;
  viewDate: Date = new Date();

  events: CalendarEvent[] = [
   
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  ScheduleCallModal(content){
    this.modalService.open(content, {centered: true });
  }

}
