import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginShow: boolean = false;
  signupShow: boolean = false;

  constructor(private modalService: NgbModal) {}

  loginModal(content) {
    this.modalService.open(content, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.loginShow=true;
    this.signupShow=false;    
  }

  signupModal(content) {
    this.modalService.open(content, { centered: true, windowClass: 'login-modal', size: 'lg' });
    this.loginShow=false;
    this.signupShow=true;
  }

  ngOnInit(): void {
  }

}
