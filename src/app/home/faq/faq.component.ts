import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit, OnDestroy {

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
