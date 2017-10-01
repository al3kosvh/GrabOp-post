import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav } from '@angular/material';
import { Observable } from 'rxjs/Observable';

// Components
import { HelpComponent } from '../help/help.component';

// Services
import { ModalWindowService } from '../../modules/shared/services/modal-window.service';
import { AuthenticationService } from '../../modules/account/services/authentication.service';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Input() sidenav: MdSidenav;
    private profile_pic: string;
    private visible: Observable<boolean>;

    constructor(
        private authService: AuthenticationService,
        public modal: ModalWindowService,
        private toolbarService: ToolbarService
    ) {
        this.visible = this.toolbarService.isVisible();        
    }

    ngOnInit() {
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
