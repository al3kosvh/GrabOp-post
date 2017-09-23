import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Location } from '@angular/common';

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
    private profile_pic: string;

    constructor(
        private authHttp: AuthHttpService,
        public modal: ModalWindowService,
        private location: Location
    ) {  }

    ngOnInit() {
        
        this.authHttp.user$.subscribe(user => {
            if (!user) return;
            this.profile_pic = user.profile_pic;
        });
    }

    canShow(): boolean {
        return this.location.path() == '/guest' ? false : true;
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
