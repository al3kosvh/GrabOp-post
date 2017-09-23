import { Component, Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser'
import { trigger, state, style, transition, animate, keyframes, group } from '@angular/animations';

import { VOUserExt } from './modules/account/models/vouser';

// Services
import { AuthHttpService } from './modules/account/services/auth-http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routerAnimationRight', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(100%, 0, 0)'
            })),
            transition('in => out', animate('400ms ease-in-out')),
            transition('out => in', animate('400ms ease-in-out'))
        ]),
    ]
})
export class AppComponent {

    private isLoggedIn: Observable<boolean>;
    private user: VOUserExt;
    private state: string = 'out';
    private withToolbar

    constructor(
        private auth: AuthHttpService,
        private mdIconRegistry: MdIconRegistry,
        private sanitizer: DomSanitizer
    ) {

        this.isLoggedIn = auth.isLogedIn;

        auth.user$.subscribe(user => {
            if (!user) return;
            //this.user = user
        });

        // Register Icons
        mdIconRegistry
            .addSvgIcon('facebook', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/facebook.svg'))
            .addSvgIcon('twitter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img//icons/twitter.svg'))
            .addSvgIcon('heart', this.sanitizer.bypassSecurityTrustResourceUrl('assets/img//icons/heart.svg'))

        // console.log('appp');
    }

    prepareRouter(outlet) {
        const animation = outlet.activatedRouteData['animation'] || {};
        return animation['value'] || null;
        //let a = r.activeRoute ? r.activeRoute.config.animations : '';
        //console.log('prepareRouter', a);
        //return a;
        //return r.activeRoute ? r.activeRoute.config.animations : '';
    }

    // prepareRouteTransition(r) {
    //   const animation = r.activatedRouteData['animation'] || {};
    //   return animation['value'] || null;
    //
    //   // return r.activeRoute ? r.activeRoute.config.animations : '';
    //
    //   // return this.state = (this.state === 'out' ? 'in' : 'out');
    // }

}
