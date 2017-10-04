import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {
  MatGridListModule,
  MatSlideToggleModule,
  MdTabsModule,
  MdButtonModule,
  MdCardModule
} from '@angular/material';

import {SharedModule} from "../shared/shared.module";

// Components
import {ConnectionComponent} from './components/connection/connection.component';
import {ConnectCardComponent} from './components/connect-card/connect-card.component';

// Services
import {ConnectionService} from './services/connection.service';

// Pipes
import {PipesModule} from '../../pipes/pipes.module';

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
  ],
  declarations: [
    ConnectionComponent,
    ConnectCardComponent
  ],
  providers: [
    ConnectionService
  ]
})
export class ConnectionModule {
}
