import { Component, OnInit } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-find-experts',
  templateUrl: './find-experts.component.html',
  styleUrls: ['./find-experts.component.scss']
})
export class FindExpertsComponent implements OnInit {
 
  currentRate = 4;

  public Editor = ClassicEditor;

  constructor() { }

  ngOnInit(): void {
  }

}
