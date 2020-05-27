import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { SignUpUserModel } from 'src/app/Models/SignUpUserModel';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup-popup',
  templateUrl: './signup-popup.component.html',
  styleUrls: ['./signup-popup.component.scss'],
})
export class SignupPopupComponent implements OnInit {
  signupUserDetails: SignUpUserModel = new SignUpUserModel();
  constructor(private authService: AuthenticationService) {}

  ngOnInit(): void {
    // this.signupForm = this.formBuilder.group({
    //   FirstName: [null,Validators.required],
    //   LastName: [null,Validators.required],
    //   E-Mail: [null, [Validators.required,Validators.email]],
    //   Password: [null,Validators.required],
    //   Country: [null,Validators.required],
    //   PhoneNumber: [null,Validators.required]
    // });
  }

  /**
   * Sign up User.
   */
  signUpUser() {
    this.authService.SignUpUser(this.signupUserDetails).subscribe((data) => {
      alert('User Registered successfully. please check email for verification.');
      console.log(data);
    },
    (err: HttpErrorResponse) => {
      alert('Something went wrong. please check console log for more detail.');
      console.log(err);
    });
  }
}
