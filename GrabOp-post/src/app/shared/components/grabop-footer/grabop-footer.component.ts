import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { AuthHttpMy } from '../../../services/auth-http';
import { MdDialog } from '@angular/material';
import { LoginPanelComponent } from '../../../app-login/login-panel/login-panel.component';

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

        this.dialog.open(LoginPanelComponent, {
            width: '400px',
            height: '400px'
        })

    }
}
