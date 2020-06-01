import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/_services/Common/Common.service';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {
userName: string;
password: string;
  constructor(private authService: AuthenticationService,  private common: CommonService) { }

  ngOnInit(): void {
  }

  SignInUser() {
    this.authService.SignInUser(this.userName, this.password).subscribe((data) => {
      if (data) {
        this.common.show_toast('s', 'User LoggedIn successfully.');
        console.log(data);
      }
    },
    (err: HttpErrorResponse) => {
      this.common.show_toast('e', 'There wass some error, Please try again.');
      console.log(err);
    });
  }

  OnSignUpClick() {

  }
}
