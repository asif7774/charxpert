import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';
import { colors } from '../../calendar-utilities/colors';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3),
      color: colors.blue,
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5),
      color: colors.yellow,
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
