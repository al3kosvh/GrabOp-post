import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MdDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer"

import { VOPost } from '../../../../models/vos';

// Components
import { SignInComponent } from '../../../account/components/signin/signin.component';

// Services
import { ModalWindowService } from '../../../shared/services/modal-window.service';
import { AuthHttpService } from '../../../account/services/auth-http.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.css'],
    providers: []
})
export class LandingComponent implements OnInit {

    private isLoggedIn: Observable<boolean>;
    private postNeed: VOPost[] = [];

    private summaryData: any[] = [
        {
            image: 'assets/img/search-opportunities.png',
            text: 'Find jobs, products, services and talent'
        },
        {
            image: 'assets/img/promote-yourself.png',
            text: 'Post your offers and your needs'
        },
        {
            image: 'assets/img/create-alliances.png',
            text: 'Join forces with other members to expand opportunities'
        },
        {
            image: 'assets/img/do-it-your-way.png',
            text: 'Join forces with other members to expand opportunities'
        },

    ];

    constructor(
        private route: ActivatedRoute,
        private modal: ModalWindowService,
        private auth: AuthHttpService,
        private dialog: MdDialog
    ) {
        this.isLoggedIn = auth.isLogedIn;
    }

    ngOnInit() {

        /*const login = this.route.snapshot.params.login;
        if (!!login) {
            console.log('login', login);
            this.modal.openWindow(SigninComponent, (res) => {
                console.log('SigninComponent  ', res);
            });
        }*/
    }


    loginClick() {

        /*let ref = this.dialog.open(SigninComponent, {
            width: '400px',
            height: '400px'
        });

        SigninComponent.loggedIn = res => {
            console.log(res);
            //if(res) {
            setTimeout(() => ref.close(), 2000);

            // }

        }*/
    }

    logOutClick() {
        this.auth.signOut();
    }

}
