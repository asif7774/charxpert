import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { InvokeFunctionExpr } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginShow: boolean = false;
  @Output() public  signupShow: boolean = false;
  constructor(private modalService: NgbModal) {}

  loginModal(content) {
    this.modalService.open(content, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.loginShow = true;
    this.signupShow = false;
  }

  signupModal(content) {
    this.modalService.open(content, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.loginShow = false;
    this.signupShow = true;
  }

  ngOnInit(): void {
  }

  get_child_value(event){
    console.log('event ', event);
    this.signupShow = false;
  }

}
