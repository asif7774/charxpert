import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.scss']
})
export class QueryDetailComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  queryModal(content) {
    this.modalService.open(content, { centered: true });
  }

}
