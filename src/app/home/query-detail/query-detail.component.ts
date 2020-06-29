import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-query-detail',
  templateUrl: './query-detail.component.html',
  styleUrls: ['./query-detail.component.scss']
})
export class QueryDetailComponent implements OnInit, OnDestroy {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.classAdd();
  }

  ngOnDestroy(): void {
    this.classRemove();
  }

  queryModal(content) {
    this.modalService.open(content, { centered: true });
  }  

  classAdd(){
    document.getElementById('contectWrapper').classList.add("if-not-login");
  }

  classRemove(){
    document.getElementById('contectWrapper').classList.remove("if-not-login");
  }

}
