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
import {
    MatToolbarModule, MatSidenavModule, MatMenuModule, MatButtonModule, MatIconModule, MatListModule, MatIconRegistry,
    MatGridListModule
} from '@angular/material';

// App Modules
import { HomeModule } from './modules/home/home.module';
import { AccountModule } from './modules/account/account.module';
import { SharedModule } from "./modules/shared/shared.module";
import { PostModule } from './modules/post/post.module';
import { LandingModule } from './modules/landing/landing.module';
import { ConnectionModule } from './modules/connection/connection.module';
import { OpportunityModule } from './modules/opportunity/opportunity.module';
import { ProfileModule } from './modules/profile/profile.module';
import { SearchModule } from './modules/search/search.module';

// Pipes
import { PipesModule } from './pipes/pipes.module';
import { PostsFilterPipe } from './pipes/posts-filter.pipe';

// Services
import { ToolbarService } from './services/toolbar.service';
import { SidenavService } from './services/sidenav.service';

// Components
import { AppComponent } from './app.component';
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { PageNotFoundComponent } from './components/pagenotfound/page-not-found.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { TermsOfUseComponent } from './components/terms-of-use/terms-of-use.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpComponent } from './components/help/help.component';
import { SidenavOptionsComponent } from './components/sidenav-options/sidenav-options.component';

const routes: Routes = [
    { path: '', redirectTo: '/guest', pathMatch: 'full' },
    { path: 'how-it-works', component: HowItWorksComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: '**', component: PageNotFoundComponent },
];

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        HttpModule,
        AccountModule,
        MatToolbarModule,
        MatSidenavModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        PostModule,
        LandingModule,
        HomeModule,
        SharedModule,
        PipesModule,
        ConnectionModule,
        OpportunityModule,
        ProfileModule,
        SearchModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        ToolbarComponent,
        FooterComponent,
        PageNotFoundComponent,
        HowItWorksComponent,
        FeedbackComponent,
        TermsOfUseComponent,
        AboutUsComponent,
        HelpComponent,
        SidenavOptionsComponent
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        MatIconRegistry,
        ToolbarService,
        SidenavService,
    ],
    entryComponents: [HelpComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
