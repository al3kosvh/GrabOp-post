import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../shared/shared.module";

// Components
import { ConnectionComponent } from './components/connection/connection.component';
import { ConnectCardComponent } from './components/connect-card/connect-card.component';

// Services
import { ConnectionService } from './services/connection.service';

const routes: Routes = [];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(routes)
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
