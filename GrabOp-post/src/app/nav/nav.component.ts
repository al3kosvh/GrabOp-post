import { Component, OnInit } from '@angular/core';
import { AuthHttpMy } from '../services/auth-http';
import { HelpComponent } from './help/help.component';

// Services
import { ModalWindowService } from '../shared/services/modal-window.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    profile_pic: string;

    constructor(private authHttp: AuthHttpMy, public modal: ModalWindowService) {
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
}
