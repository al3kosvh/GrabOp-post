import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Location } from '@angular/common';
import { Router, NavigationStart } from '@angular/router';

// Components
import { HelpComponent } from '../help/help.component';

// Services
import { ModalWindowService } from '../../modules/shared/services/modal-window.service';
import { AuthHttpService } from '../../modules/account/services/auth-http.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Input() sidenav: MdSidenav;
    @Output() visible = new EventEmitter<boolean>();
    private profile_pic: string;    

    constructor(
        private authHttp: AuthHttpService,
        public modal: ModalWindowService,
        private location: Location,
        private router: Router
    ) {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) this.visible.emit((event.url == '/guest') ? false : true)
        });
    }

    ngOnInit() {

        this.authHttp.user$.subscribe(user => {
            if (!user) return;
            this.profile_pic = user.profile_pic;
        });
    }

    openHelp() {

        this.modal.openWindow(HelpComponent, (res) => {
            console.log('helpComponent  ', res);
        });
    }

    toggleSideNav() {
        this.sidenav.toggle();
    }
}
