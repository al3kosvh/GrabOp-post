import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatIconModule, MatOptionModule, MdInputModule } from '@angular/material';

import { SearchComponent } from './components/search/search.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatIconModule,
        MatOptionModule,
        MdInputModule
    ],
    declarations: [SearchComponent],
    exports: [SearchComponent],
    providers: [],
})
export class SearchModule { }
