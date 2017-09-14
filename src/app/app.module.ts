﻿import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';

import { MyPostsService } from './services/my-posts.service';
import { AuthHttpMy } from './services/auth-http';
import { UploadService } from './services/upload.service';


import { LoginPanelComponent } from './app-login/login-panel/login-panel.component';

/*import { LoginButtonComponent } from './app-login/login-button/login-button.component';
import { LoginPanelComponent } from './app-login/login-panel/login-panel.component';*/
// import {ModalWindowService} from "./services/modal-window.service";
import { GrabopFooterComponent } from "./shared/grabop-footer/grabop-footer.component";
// import { LogoutButtonComponent } from './app-login/logout-button/logout-button.component';
// import {LoginNewService} from './app-login/login-new/login-new.service';
// import { ModalAlertComponent } from './shared/modal-alert/modal-alert.component';
import { MaterialModuleApp } from './shared/material-app.module';
// import {UserEditService} from './user-edit/user-edit.service';
import { NavModule } from "./nav/nav.module";
import { MySharedModule } from "./shared/shared.module";
// import {UserEditComponent} from "./user-edit/user-edit.component";
// import {UserEditModule} from "./user-edit/user-edit.module";
// import {SearchAdvancedService} from './search-advanced/search-advanced.service';

// import {HomeModule} from './home/home.module';
import { PipesModule } from './pipes/pipes.module';
import { PostsFilterPipe } from './pipes/posts-filter.pipe';
import { PostsModule } from './posts/posts.module';
import { LandingModule } from './landing/landing.module';
import { PostEditModule } from './post-edit/post-edit.module';
// import {PostEditComponent} from './post-edit/post-edit.component';


import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { ConnectionService } from './services/connection.service';
import { PostsService } from './services/posts.service';
import { HomeModule } from './home/home.module';


@NgModule({
    declarations: [
        AppComponent,
        GrabopFooterComponent,
        LoginPanelComponent
        // LogoutButtonComponent,
        // PostEditComponent
        // ModalAlertComponent,
        // PostsFilterPipe
    ],
    imports: [
        BrowserAnimationsModule,
        MaterialModuleApp,
        // MdIconModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppRoutingModule,
        //  UserEditModule,
        NavModule,
        PostsModule,
        LandingModule,
        HomeModule,
        MySharedModule,
        PipesModule,
        PostEditModule
        // PipesModule.forRoot()
    ],
    providers: [
        AuthHttpMy,
        UploadService,
        ConnectionService,
        MyPostsService,
        PostsService,
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    entryComponents: [
        LoginPanelComponent
        // UserEditComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
