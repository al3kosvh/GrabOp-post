import { Component, Directive } from '@angular/core';
import { AuthHttpMy } from './services/auth-http';
import { VOUserExt } from './app-login/vouser';
import { Observable } from 'rxjs/Observable';
//import {trigger, state, style, transition, animate, keyframes, group} from '@angular/animations';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    /* animations: [
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
     ]*/
})
export class AppComponent {
    title = 'AppComponent ';
    showMe: boolean = true;
    isLoggedIn: Observable<boolean>;

    user: VOUserExt;

    state: string = 'out';

    constructor(auth: AuthHttpMy) {

        this.isLoggedIn = auth.isLogedIn$;
        auth.user$.subscribe(user => {
            if (!user) return;
            // this.user = user
        });

        // console.log('appp');
    }

    // prepareRouter(outlet){
    //const animation = outlet.activatedRouteData['animation'] || {};
    // return animation['value'] || null;
    // let a = r.activeRoute ? r.activeRoute.config.animations : '';
    // console.log('prepareRouter', a);
    // return a;
    // return r.activeRoute ? r.activeRoute.config.animations : '';
    // }

    // prepareRouteTransition(r) {
    //   const animation = r.activatedRouteData['animation'] || {};
    //   return animation['value'] || null;
    //
    //   // return r.activeRoute ? r.activeRoute.config.animations : '';
    //
    //   // return this.state = (this.state === 'out' ? 'in' : 'out');
    // }

}
