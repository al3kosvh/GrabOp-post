import { Component, Input, OnChanges } from '@angular/core';
import { VOUserExt } from '../../../account/models/vouser';

@Component({
    selector: 'user-bio',
    templateUrl: './user-bio.component.html',
    styleUrls: ['./user-bio.component.css']
})
export class UserBioComponent implements OnChanges {

    @Input() person: VOUserExt;    

    constructor(
        
    ) { }

    ngOnChanges() {
        
    }
}
