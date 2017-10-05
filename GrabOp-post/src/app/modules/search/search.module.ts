import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  MatIconModule, MatCheckboxModule, MatRadioModule, MatButtonModule, MatTabsModule, MatInputModule,
  MatSlideToggleModule, MatSliderModule, MatSelectModule, MatProgressSpinnerModule, MatChipsModule,
  MdExpansionModule, MatAutocompleteModule, MatOptionModule, MdInputModule
} from '@angular/material';
import { RouterModule, Routes } from "@angular/router";

// Shared Modules
import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

// Components
import { SearchComponent } from "./components/search/search.component";
import { AdvancedSearchComponent } from "./components/advanced-search/advanced-search.component";
import { PipesModule } from "../../pipes/pipes.module";

const routes: Routes = [
  {path: 'advanced-search', component: AdvancedSearchComponent}
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
    MdExpansionModule,
    MatOptionModule,
    MdInputModule,
    PipesModule
  ],
  declarations: [SearchComponent, AdvancedSearchComponent],
  exports: [SearchComponent],
  providers: [],
})
export class SearchModule {
}
