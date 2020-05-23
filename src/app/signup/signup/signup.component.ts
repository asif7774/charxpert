import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  emailVerification:boolean = true;
  mobVerification:boolean = false;

  constructor() { }

  verifyEmail(){
    this.emailVerification = true;
    this.mobVerification = false;
  }
  verifyPhone(){
    this.mobVerification = true;
    this.emailVerification = false;
  }

  ngOnInit(): void {
  }

}
