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
  MdSidenavModule,
  MdTabsModule
} from "@angular/material";

import { SharedModule } from "../shared/shared.module";
// Components
import { ConnectionComponent } from "./components/connection/connection.component";
import { ConnectCardComponent } from "./components/connect-card/connect-card.component";
import { MessageSideNavComponent } from "./components/message-sidenav/message-sidenav.component";
// Services
import { ConnectionService } from "./services/connection.service";
// Pipes
import { PipesModule } from "../../pipes/pipes.module";

const routes: Routes = [
  {path: 'connections', component: ConnectionComponent},
  {path: 'connections/:id', component: ConnectionComponent}];

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
    MatAutocompleteModule
  ],
  declarations: [
    ConnectionComponent,
    ConnectCardComponent,
    MessageSideNavComponent
  ],
  providers: [
    ConnectionService
  ],
  entryComponents: [MessageSideNavComponent]
})
export class ConnectionModule {
}
