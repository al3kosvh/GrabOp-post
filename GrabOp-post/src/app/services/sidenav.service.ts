
import { Injectable, Component, ComponentFactory, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { MatSidenav } from '@angular/material';

import { VOUserExt } from '../modules/account/models/vouser';

import { AllianceInviteComponent } from '../modules/profile/components/alliance-invite/alliance-invite.component';
import { SignUpComponent } from '../modules/account/components/signup/signup.component';
import { PostCreateComponent } from '../modules/post/components/post-create/post-create.component';
import { MessageSideNavComponent } from '../modules/connection/components/message-sidenav/message-sidenav.component';

@Injectable()
export class SidenavService {

  sidenav: MatSidenav;
  viewContainerRef: ViewContainerRef;
  data: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  registerSidenav(sidenav: MatSidenav) {
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

  signUp() {
    this.viewContainerRef.clear()
    const factory = this.componentFactoryResolver.resolveComponentFactory(SignUpComponent);
    const ref = this.viewContainerRef.createComponent(factory);
    //let instance: any = ref.instance;
    //instance.person = person;
    this.sidenav.open();
  }

  onCreatePost(type: string) {
    let self = this;
    setTimeout(function () {
      self.viewContainerRef.clear();
      const factory = self.componentFactoryResolver.resolveComponentFactory(PostCreateComponent);
      const ref = self.viewContainerRef.createComponent(factory);
      let instance: any = ref.instance;
      instance.type = type;
      self.sidenav.open();
    }, this.getTimerValue());
  }

  onMessage(msg: Models.VOMessage) {
    let self = this;
    setTimeout(function () {
      self.viewContainerRef.clear();
      const factory = self.componentFactoryResolver.resolveComponentFactory(MessageSideNavComponent);
      const ref = self.viewContainerRef.createComponent(factory);
      let instance: any = ref.instance;
      instance.message = msg;
      instance.sidenav = self.sidenav;
      self.sidenav.open();
    }, this.getTimerValue());
  }

  getTimerValue(): number {
    let value = 0;
    if (this.sidenav.opened) {
      this.sidenav.close();
      value = 500;
    }
    return value;
  }
}
