import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-all-queries',
  templateUrl: './all-queries.component.html',
  styleUrls: ['./all-queries.component.scss']
})
export class AllQueriesComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    this.classAdd();
  }

  ngOnDestroy(): void {
    this.classRemove();
  }

  classAdd(){
    document.getElementById('contectWrapper').classList.add("if-not-login");
  }

  classRemove(){
    document.getElementById('contectWrapper').classList.remove("if-not-login");
  }

}
