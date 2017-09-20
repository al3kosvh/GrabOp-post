import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { MdDialog } from '@angular/material';

// Components
import { SigninComponent } from '../../modules/account/components/signin/signin.component';

// Services
import { AuthHttpService } from '../../modules/account/services/auth-http.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: []
})
export class FooterComponent implements OnInit {

    private isLoggedIn: Observable<boolean>;

    constructor(
        private auth: AuthHttpService,
        private dialog: MdDialog
    ) {
        this.isLoggedIn = this.auth.isLogedIn;
    }

    ngOnInit() {

    }

    loginClick() {

        this.dialog.open(SigninComponent, {
            width: '400px',
            height: '400px'
        })

    }
}
