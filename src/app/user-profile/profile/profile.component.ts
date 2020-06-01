import { Component, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { setHours, setMinutes } from 'date-fns';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  
  view: CalendarView = CalendarView.Day;

  viewDate: Date = new Date();

  ProScheduleShow:boolean = true;
  ProMyprofileShow:boolean = false;
  ProNotificationShow:boolean = false;
  ProPaymentShow:boolean = false;
  ProTransactionShow:boolean = false;
  ProPreferencesShow:boolean = false;

  events: CalendarEvent[] = [
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 3)
    },
    {
      title: 'No event end date',
      start: setHours(setMinutes(new Date(), 0), 5)
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

  ProSchedule(){
    this.ProScheduleShow = true;
    this.ProMyprofileShow = false;
    this.ProNotificationShow = false;
    this.ProPaymentShow = false;
    this.ProTransactionShow = false;
    this.ProPreferencesShow = false;
  }
  ProMyprofile(){
    this.ProScheduleShow = false;
    this.ProMyprofileShow = true;
    this.ProNotificationShow = false;
    this.ProPaymentShow = false;
    this.ProTransactionShow = false;
    this.ProPreferencesShow = false;
  }
  ProNotification(){
    this.ProScheduleShow = false;
    this.ProMyprofileShow = false;
    this.ProNotificationShow = true;
    this.ProPaymentShow = false;
    this.ProTransactionShow = false;
    this.ProPreferencesShow = false;
  }
  ProPayment(){
    this.ProScheduleShow = false;
    this.ProMyprofileShow = false;
    this.ProNotificationShow = false;
    this.ProPaymentShow = true;
    this.ProTransactionShow = false;
    this.ProPreferencesShow = false;
  }
  ProTransaction(){
    this.ProScheduleShow = false;
    this.ProMyprofileShow = false;
    this.ProNotificationShow = false;
    this.ProPaymentShow = false;
    this.ProTransactionShow = true;
    this.ProPreferencesShow = false;
  }
  ProPreferences(){
    this.ProScheduleShow = false;
    this.ProMyprofileShow = false;
    this.ProNotificationShow = false;
    this.ProPaymentShow = false;
    this.ProTransactionShow = false;
    this.ProPreferencesShow = true;
  }

}
