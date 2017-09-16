import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AuthHttpMy } from '../../../services/auth-http';
import { MdDialog } from '@angular/material';
import { SigninComponent } from '../../../modules/account/components/signin/signin.component';

@Component({
    selector: 'app-grabop-footer',
    templateUrl: './grabop-footer.component.html',
    styleUrls: ['./grabop-footer.component.css'],
    providers: []
})
export class GrabopFooterComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;

    constructor(

        private auth: AuthHttpMy,
        private dialog: MdDialog
    ) {

        this.isLoggedIn$ = auth.isLogedIn$;
    }

    ngOnInit() { }

    loginClick() {

        this.dialog.open(SigninComponent, {
            width: '400px',
            height: '400px'
        })

    }
}
