import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvokeFunctionExpr } from '@angular/compiler';

import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { SignUpUserModel } from 'src/app/_models/SignUpUserModel';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonService } from 'src/app/_services/Common/Common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;
  password: string;

  signupUserDetails: SignUpUserModel = new SignUpUserModel();

  loginShow: boolean = false;
  @Output() public  signupShow: boolean = false;
  constructor(private modalService: NgbModal, private authService: AuthenticationService, private common: CommonService) {}

  loginModal(content) {
    this.modalService.open(content, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.loginShow = true;
    this.signupShow = false;
  }

  signupModal(content) {
    this.modalService.open(content, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.signupShow = true;
    this.loginShow = false;
  }

  loginViewToggle(viewType){
    this.loginShow=viewType;
    this.signupShow = false;
  }

  signupViewToggle(viewType){
    this.signupShow=viewType;
    this.loginShow = false;
  }

  ngOnInit(): void {
  }

  get_child_value(event){
    console.log('event ', event);
    this.signupShow = false;
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
        this.modalService.dismissAll()
        this.common.change_routing('verify-email');
      }
    },
    (err: HttpErrorResponse) => {
      this.common.show_toast('e', 'There wass some error, Please try again.');
    });
  }

  SignInUser() {
    const userDetails = {
      userName : this.userName,
      password : this.password
    }
    this.authService.SignInUser(this.userName, this.password).subscribe((data) => {
      if (data) {
        setTimeout(() => {
          this.common.show_toast('s', 'User LoggedIn successfully.');
        }, 2);

        console.log(data);
        localStorage.setItem('UserDetails', JSON.stringify(userDetails));
        this.modalService.dismissAll()
        this.common.change_routing('user-profile');
      }
    },
    (err: HttpErrorResponse) => {
      this.common.show_toast('e', 'There wass some error, Please try again.');
      console.log(err);
    });
  }

}
