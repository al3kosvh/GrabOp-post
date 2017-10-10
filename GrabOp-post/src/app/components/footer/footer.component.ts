import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

// Services
import { AuthenticationService } from '../../modules/account/services/authentication.service';
import { SidenavService } from '../../services/sidenav.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
    providers: []
})
export class FooterComponent implements OnInit {

    isLoggedIn: Observable<boolean>;

    constructor(
        private auth: AuthenticationService,
        private sidenavService: SidenavService
    ) {
        this.isLoggedIn = this.auth.isLoggedIn();
    }

    ngOnInit() {

    }

    onSignUp() {
        this.sidenavService.signUp();
    }
}
