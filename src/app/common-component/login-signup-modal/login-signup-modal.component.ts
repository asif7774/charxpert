import { Component, OnInit, Output, Input, ViewChild, ElementRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SignUpUserModel } from 'src/app/_models/SignUpUserModel';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from 'src/app/_services/Authentication.service';
import { CommonService } from 'src/app/_services/Common/Common.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-login-signup-modal',
  templateUrl: './login-signup-modal.component.html',
  styleUrls: ['./login-signup-modal.component.scss']
})
export class LoginSignupModalComponent implements OnInit {

  private eventsSubscription: Subscription;
  @Input() events: Observable<void>;
  @ViewChild('openLogin') openLoginRef: ElementRef;
  userName: string;
  password: string;
  modalViewType:string;

  signupUserDetails: SignUpUserModel = new SignUpUserModel();

  loginShow: boolean = false;
  @Output() public  signupShow: boolean = false;
  constructor(private modalService: NgbModal, private authService: AuthenticationService, private common: CommonService) {}

  ngOnInit(){
    this.eventsSubscription = this.events.subscribe((data) => {
      this.modalOpenLogic(data);
    });
  }
  ngOnDestroy() {
    this.eventsSubscription.unsubscribe();
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


  modalOpenLogic(modalType){
    console.log(modalType);
    console.log(this.openLoginRef);
    this.modalService.open(this.openLoginRef, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.modalViewType = modalType;
  }

  modalViewToggle(viewType){
    this.modalViewType = viewType;
  }

}
