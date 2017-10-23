import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatIconModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatTabsModule, MatInputModule,
  MatSlideToggleModule, MatSliderModule, MatSelectModule, MatProgressSpinnerModule, MatChipsModule,
  MatExpansionModule, MatAutocompleteModule, MatOptionModule, MatGridListModule, MatCardModule, MatSidenavModule
} from '@angular/material';
import { RouterModule, Routes } from "@angular/router";

// Shared Modules
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

// Components
import { PanelMassagesComponent } from "./components/panel/panel-messages.component";

const routes: Routes = [
  {path: 'messages', component: PanelMassagesComponent}
];

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    PostModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatOptionModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule
  ],
  declarations: [PanelMassagesComponent],
  exports: [],
  providers: [],
})
export class MessageModule {
}
