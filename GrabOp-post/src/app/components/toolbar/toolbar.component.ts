import { Component, OnInit, Input } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';

// Components
import { HelpComponent } from '../help/help.component';

// Services
import { AuthenticationService } from '../../modules/account/services/authentication.service';
import { ToolbarService } from '../../services/toolbar.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Input() sidenav: MdSidenav;
    profile_pic: string;
    visible: Observable<boolean>;
    user: Models.VOUserExt;

    constructor(
        private authService: AuthenticationService,
        private dialog: MdDialog,
        private toolbarService: ToolbarService
    ) {
        this.visible = this.toolbarService.isVisible();
        this.authService.getUser().subscribe(user => {
            this.user = user;
        });
    }

    ngOnInit() {
    }

    openHelp() {
        this.dialog.open(HelpComponent, (res) => {
            console.log('helpComponent  ', res);
        });
    }

    toggleSideNav() {
        this.sidenav.toggle();
    }
}
