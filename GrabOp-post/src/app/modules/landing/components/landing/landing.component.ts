import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Observer } from "rxjs/Observer"

import { VOPost } from '../../../../models/vos';

// Components
import { SignInComponent } from '../../../account/components/signin/signin.component';
import { SignUpComponent } from '../../../account/components/signup/signup.component';

// Services
import { ModalWindowService } from '../../../shared/services/modal-window.service';
import { AuthenticationService } from '../../../account/services/authentication.service';
import { ToolbarService } from '../../../../services/toolbar.service';
import { SidenavService } from '../../../../services/sidenav.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers: []
})
export class LandingComponent implements OnInit, OnDestroy {

  isLoggedIn: Observable<boolean>;
  postNeed: VOPost[] = [];

  summaryData: any[] = [
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
    private auth: AuthenticationService,
    private dialog: MatDialog,
    private toolbarService: ToolbarService,
    private sidenavService: SidenavService
  ) {
    this.toolbarService.hideToolbar();
    this.isLoggedIn = this.auth.isLoggedIn();
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.toolbarService.showToolbar();
  }

  onSignUp() {
    this.sidenavService.signUp();
  }
}
