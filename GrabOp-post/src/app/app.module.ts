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
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HashLocationStrategy, LocationStrategy } from "@angular/common";

// App Modules
import { HomeModule } from './modules/home/home.module';
import { AccountModule } from './modules/account/account.module';
import { SharedModule } from "./modules/shared/shared.module";
import { PostModule } from './modules/post/post.module';
import { LandingModule } from './modules/landing/landing.module';
import { PostEditModule } from './modules/post-edit/post-edit.module';
import { ConnectionModule } from './modules/connection/connection.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { ProfileModule } from './modules/profile/profile.module';

// Pipes
import { PipesModule } from './pipes/pipes.module';
import { PostsFilterPipe } from './pipes/posts-filter.pipe';

// Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { SignInComponent } from './modules/account/components/signin/signin.component';
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found.component';

const routes: Routes = [
    { path: '', redirectTo: '/guest', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes),
        AccountModule,
        PostModule,
        LandingModule,
        HomeModule,
        SharedModule,
        PipesModule,
        PostEditModule,
        ConnectionModule,
        OpportunityModule,
        ProfileModule
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent,
        PageNotFoundComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
