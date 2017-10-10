import { Component, OnInit, Input } from '@angular/core';
import { MatSidenav, MatDialog, MatDialogConfig } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router'; 

// Components
import { HelpComponent } from '../help/help.component';

// Services
import { AuthenticationService } from '../../modules/account/services/authentication.service';
import { ToolbarService } from '../../services/toolbar.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

    @Input() sidenav: MatSidenav;
    profile_pic: string;
    visible: Observable<boolean>;
    user: Models.VOUserExt;

    constructor(
        private authService: AuthenticationService,
        private dialog: MatDialog,
        private toolbarService: ToolbarService,
        private sidenavService: SidenavService,
        private router: Router
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

    goToProfile(): void {
        this.router.navigate(['profile']);
    }

    toggleSideNav() {
        this.sidenav.toggle();
    }

    onCreatePost(type: string) {
        this.sidenavService.onCreatePost(type);
    }
}
