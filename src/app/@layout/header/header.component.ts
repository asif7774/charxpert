import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    showUsrDropdown : boolean = false;
    isMenuCollapsed : boolean = false;

    eventsSubject: Subject<void> = new Subject<void>();

    constructor() {
    }
    ngOnInit() {
    }

    loginModalClick(modalType:any) {
        this.eventsSubject.next(modalType);
    }

    toggleUsrDropdown(){
        this.showUsrDropdown = !this.showUsrDropdown;
    }

    public sidebarToggle(): void {
        if(!document.getElementById("sidebar-wrapper").classList.contains("toggle")){
            document.getElementById("sidebar-wrapper").classList.add("toggle");
        }else{
            document.getElementById("sidebar-wrapper").classList.remove("toggle");
        }
    }
}
