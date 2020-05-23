import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-process',
  templateUrl: './signup-process.component.html',
  styleUrls: ['./signup-process.component.scss']
})
export class SignupProcessComponent implements OnInit {

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
