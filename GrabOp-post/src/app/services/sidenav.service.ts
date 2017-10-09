
import { Injectable, Component, ComponentFactory, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MdSidenav } from '@angular/material';

import { VOUserExt } from '../modules/account/models/vouser';

import { AllianceInviteComponent } from '../modules/profile/components/alliance-invite/alliance-invite.component';

@Injectable()
export class SidenavService {

    sidenav: MdSidenav;
    viewContainerRef: ViewContainerRef;
    data: any;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver
    ) { }

    registerSidenav(sidenav: MdSidenav) {
        this.sidenav = sidenav;
    }

    registerViewContainerRef(viewContainerRef: ViewContainerRef) {
        this.viewContainerRef = viewContainerRef;
    }

    open() {
        this.sidenav.open();
    }

    close() {
        this.sidenav.close();
    }

    inviteToAlliance(person: VOUserExt) {
        this.viewContainerRef.clear()
        const factory = this.componentFactoryResolver.resolveComponentFactory(AllianceInviteComponent);
        const ref = this.viewContainerRef.createComponent(factory);
        let instance: any = ref.instance;
        instance.person = person;
        this.sidenav.open();
    }

}
