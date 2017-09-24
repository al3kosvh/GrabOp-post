import { Component, Directive } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { RouterOutlet } from '@angular/router';
import { MdIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser'
import { trigger, state, style, transition, animate, keyframes, group, query } from '@angular/animations';

import { VOUserExt } from './modules/account/models/vouser';

// Services
import { AuthHttpService } from './modules/account/services/auth-http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    animations: [
        trigger('routerAnimationRight', [
            state('*', style({
                // the view covers the whole screen with a semi tranparent background
                position: 'fixed',                
            })),

            state('in', style({
                position: 'fixed',
                //top: 0,
                //left: 0,
                right: '17px',
                //bottom: 0,
                paddingTop: '80px',
                //backgroundColor: 'rgba(0, 0, 0, 0.8)',
            })),

            transition('* => in', [
                style({
                    position: 'fixed',
                    paddingTop: '80px',
                  //top: '80px',
                    right: '-400px',                  
                }),
                animate('400ms ease-in-out')
            ])

            //transition('* => in', animate('400ms ease-in-out')),
        ]),
    ]
})
export class AppComponent {

    private isLoggedIn: Observable<boolean>;
    private user: VOUserExt;
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

    public getRouteAnimation(outlet: RouterOutlet): any {
        return outlet.activatedRouteData.animation;

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
