import { Component, Directive, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterOutlet } from '@angular/router';
import { MatIconRegistry, MatSidenav } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser'

import { VOUserExt } from './modules/account/models/vouser';

// Services
import { AuthenticationService } from './modules/account/services/authentication.service';
import { ToolbarService } from './services/toolbar.service';
import { SidenavService } from './services/sidenav.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],    
})
export class AppComponent implements AfterViewInit {

    @ViewChild("aux") mdSidenav: MatSidenav;
    isLoggedIn: Observable<boolean>;
    user: Models.VOUserExt;
    fixedLayout: string = null;
    fix: number = 0;

    constructor(
        private authService: AuthenticationService,
        private mdIconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer,
        private toolbarService: ToolbarService,
        private sidenavService: SidenavService
    ) {

        this.isLoggedIn = authService.isLoggedIn();
        this.authService.getUser().subscribe(
            user => {
                this.user = user;
            });
        this.toolbarService.showToolbar();
        this.toolbarService.isVisible().subscribe(visible => {
            this.fixedLayout = visible ? 'fixed' : null;
        });

        // Register Icons
        mdIconRegistry
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/facebook.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img//icons/twitter.svg'))
            .addSvgIcon('heart', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img//icons/heart.svg'))        
    }

    ngAfterViewInit() {        
        this.sidenavService.registerSidenav(this.mdSidenav);
    }

}
