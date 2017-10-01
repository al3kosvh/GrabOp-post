
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/map';

@Component({
    selector: 'search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent {

    @Input() placeholder?: string;
    searchCtrl: FormControl;
    filteredStates: Observable<any[]>;

    states: any[] = [
        {
            name: 'Arkansas',
            population: '2.978M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
            flag: ''
        },
        {
            name: 'California',
            population: '39.14M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
            flag: ''
        },
        {
            name: 'Florida',
            population: '20.27M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
            flag: ''
        },
        {
            name: 'Texas',
            population: '27.47M',
            // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
            flag: ''
        }
    ];

    constructor() {
        this.searchCtrl = new FormControl();
        this.filteredStates = this.searchCtrl.valueChanges
            .startWith(null)
            .map(state => state ? this.filterStates(state) : this.states.slice());
    }

    filterStates(name: string) {
        return this.states.filter(state =>
            state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
    }
}
