import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { SignUpUserModel } from 'src/app/_models/SignUpUserModel';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/_services/Common/Common.service';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss'],
})
export class SignupPopupComponent implements OnInit {
  signupUserDetails: SignUpUserModel = new SignUpUserModel();
  constructor(private authService: AuthenticationService, private common: CommonService) {}

  ngOnInit(): void {
  }

  /**
   * Sign up User.
   */
  signUpUser() {
    this.authService.SignUpUser(this.signupUserDetails).subscribe((data) => {
      if (data) {
        alert('User Registered successfully. please check email for verification.');
        console.log(data);
        this.common.change_routing('');
      }
    },
    (err: HttpErrorResponse) => {
      alert('Something went wrong. please check console log for more detail.');
      console.log(err);
    });
  }

  OnSignInClick() {
    this.common.change_routing('');
  }
}
