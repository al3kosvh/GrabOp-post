import 'hammerjs';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";
import { ToolbarModule } from "./toolbar/toolbar.module";
import { SharedModule } from "./shared/shared.module";
import { PipesModule } from './pipes/pipes.module';
import { PostsFilterPipe } from './pipes/posts-filter.pipe';
import { PostsModule } from './posts/posts.module';
import { LandingModule } from './landing/landing.module';
import { PostEditModule } from './post-edit/post-edit.module';

// Components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { LoginPanelComponent } from './app-login/login-panel/login-panel.component';
import { GrabopFooterComponent } from "./shared/components/grabop-footer/grabop-footer.component";

// Services
import { MyPostsService } from './services/my-posts.service';
import { AuthHttpMy } from './services/auth-http';
import { UploadService } from './services/upload.service';
import { ConnectionService } from './services/connection.service';
import { PostsService } from './services/posts.service';

// import { LoginButtonComponent } from './app-login/login-button/login-button.component';
// import { LoginPanelComponent } from './app-login/login-panel/login-panel.component';
// import { ModalWindowService} from "./services/modal-window.service";
// import { LogoutButtonComponent } from './app-login/logout-button/logout-button.component';
// import { LoginNewService } from './app-login/login-new/login-new.service';
// import { ModalAlertComponent } from './shared/modal-alert/modal-alert.component';
// import { UserEditService } from './user-edit/user-edit.service';
// import { UserEditComponent } from "./user-edit/user-edit.component";
// import { UserEditModule } from "./user-edit/user-edit.module";
// import { SearchAdvancedService } from './search-advanced/search-advanced.service';
// import { HomeModule } from './home/home.module';
// import { PostEditComponent } from './post-edit/post-edit.component';

import { HomeModule } from './home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule,
        AppRoutingModule,
        //  UserEditModule,
        ToolbarModule,
        PostsModule,
        LandingModule,
        HomeModule,
        SharedModule,
        PipesModule,
        PostEditModule
        // PipesModule.forRoot()
    ],
    declarations: [
        AppComponent,
        GrabopFooterComponent,
        LoginPanelComponent
        // LogoutButtonComponent,
        // PostEditComponent
        // ModalAlertComponent,
        // PostsFilterPipe
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
