import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthHttpService } from '../../services/auth-http.service';

@Component({
    template: ''
})

export class SignOutComponent implements OnInit {

    constructor(
        private authService: AuthHttpService,
        private router: Router
    ) { }

    ngOnInit() {
        this.authService.signOut();
        this.router.navigate(['guest']);
    }
}
