import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs/Observable';

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
    ) {
        this.isLoggedIn = this.auth.isLogedIn;
    }

    ngOnInit() {

    }
}
