import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-find-experts',
  templateUrl: './find-experts.component.html',
  styleUrls: ['./find-experts.component.scss']
})
export class FindExpertsComponent implements OnInit {
 
  currentRate = 4;
  
  toggleChat : boolean= false;

  public Editor = ClassicEditor;

  constructor(private modalService: NgbModal) { }

  queryModal(content) {
    this.modalService.open(content, { size: 'lg', centered: true });
  }
  
  closeChat(){
    this.toggleChat = !this.toggleChat;
  }

  querySubmitModal(content){
    this.modalService.open(content, { centered: true });
  }

  messageModal(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
  }

}
