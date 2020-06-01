import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  @Input() public signupShow;
  @Output() public signupShowReturn = new EventEmitter();
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
        // alert('User Registered successfully. please check email for verification.');
        this.common.show_toast('s', 'User Registered successfully. please check email for verification.');
        console.log(data);
        this.signupShowReturn.emit('false');
        setTimeout(() => {
          this.common.change_routing('verify-email');
        }, 2000);
      }
    },
    (err: HttpErrorResponse) => {
      this.common.show_toast('e', 'There wass some error, Please try again.');
      console.log(err);
    });
  }

  OnSignInClick() {

  }
}
