import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-popup',
  templateUrl: './login-popup.component.html',
  styleUrls: ['./login-popup.component.scss']
})
export class LoginPopupComponent implements OnInit {
userName: string;
password: string;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  SignInUser() {
    this.authService.SignInUser(this.userName,this.password).subscribe((data) => {
      if (data) {
        alert('User Registered successfully. please check email for verification.');
        console.log(data);
      }
    },
    (err: HttpErrorResponse) => {
      alert('Something went wrong. please check console log for more detail.');
      console.log(err);
    });
  }
}
