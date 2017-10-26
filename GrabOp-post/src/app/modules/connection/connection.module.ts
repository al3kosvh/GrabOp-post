import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {
    MatAutocompleteModule,
    MatChipsModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatCardModule,
    MatExpansionModule,
    MatSidenavModule,
    MatTabsModule,
    MatMenuModule
} from "@angular/material";

import { SharedModule } from "../shared/shared.module";

// Components
import { ConnectionComponent } from "./components/connection/connection.component";
import { ConnectCardComponent } from "./components/connect-card/connect-card.component";
import { ConnectCardProfileComponent } from "./components/connect-card-profile/connect-card-profile.component";
import { MessageSideNavComponent } from "./components/message-sidenav/message-sidenav.component";
import { ConnectionProfileComponent } from "./components/connection-profile/connection-profile.component";

// Services
import { ConnectionService } from "./services/connection.service";
import { ConnectionGuard } from "./services/connection.guard";

// Pipes
import { ConnectionFilterPipe } from './pipes/connection-filter.pipe';
import { ConnectionSearchPipe } from './pipes/connection-search.pipe';

const routes: Routes = [
    { path: 'connections', component: ConnectionComponent },
    { path: 'connections/:id', component: ConnectionProfileComponent, canActivate: [ConnectionGuard] }];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        MatGridListModule,
        MatSlideToggleModule,
        RouterModule.forChild(routes),
        MatTabsModule,
        MatButtonModule,
        MatCardModule,
        MatSidenavModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatChipsModule,
        MatIconModule,
        MatAutocompleteModule,
        MatExpansionModule,
        MatMenuModule
    ],
    declarations: [
        ConnectionComponent,
        ConnectionProfileComponent,
        ConnectCardComponent,
        ConnectCardProfileComponent,
        MessageSideNavComponent,
        ConnectionFilterPipe,
        ConnectionSearchPipe
    ],
    exports: [
        ConnectCardProfileComponent
    ],
    providers: [
        ConnectionService,
        ConnectionGuard,
        ConnectionFilterPipe,
        ConnectionSearchPipe
    ],
    entryComponents: [MessageSideNavComponent]
})
export class ConnectionModule {
}
