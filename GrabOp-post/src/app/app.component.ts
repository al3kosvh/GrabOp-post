import { Component, Directive, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterOutlet } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser'
import { trigger, state, style, transition, animate, keyframes, group, query } from '@angular/animations';

import { VOUserExt } from './modules/account/models/vouser';

// Services
import { AuthenticationService } from './modules/account/services/authentication.service';
import { ToolbarService } from './services/toolbar.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],    
})
export class AppComponent {

    isLoggedIn: Observable<boolean>;
    user: Models.VOUserExt;
    fixedLayout: string = null;

    constructor(
        private authService: AuthenticationService,
        private mdIconRegistry: MdIconRegistry,
        private sanitizer: DomSanitizer,
        private toolbarService: ToolbarService
    ) {

        this.isLoggedIn = authService.isLoggedIn();
        this.authService.getUser().subscribe(
            user => {
                this.user = user;
            });
        this.toolbarService.showToolbar();
        this.toolbarService.isVisible().subscribe(visible => {
            this.fixedLayout = visible ? 'fixed' : null;
        })

        // Register Icons
        mdIconRegistry
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/facebook.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img//icons/twitter.svg'))
            .addSvgIcon('heart', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img//icons/heart.svg'))

        // console.log('appp');
    }

}
