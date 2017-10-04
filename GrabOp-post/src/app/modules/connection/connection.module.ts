import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatChipsModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MdButtonModule,
  MdCardModule,
  MdExpansionModule,
  MdSidenavModule,
  MdTabsModule
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
import { PipesModule } from "../../pipes/pipes.module";

const routes: Routes = [
  {path: 'connections', component: ConnectionComponent},
  {path: 'connections/:id', component: ConnectionProfileComponent, canActivate: [ConnectionGuard]}];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatGridListModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes),
    MdTabsModule,
    MdButtonModule,
    MdCardModule,
    PipesModule,
    MdSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MdExpansionModule
  ],
  declarations: [
    ConnectionComponent,
    ConnectionProfileComponent,
    ConnectCardComponent,
    ConnectCardProfileComponent,
    MessageSideNavComponent
  ],
  providers: [
    ConnectionService,
    ConnectionGuard
  ],
  entryComponents: [MessageSideNavComponent]
})
export class ConnectionModule {
}
