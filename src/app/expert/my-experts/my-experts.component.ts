import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-experts',
  templateUrl: './my-experts.component.html',
  styleUrls: ['./my-experts.component.scss']
})
export class MyExpertsComponent implements OnInit {
  currentRate = 4;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  messageModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
