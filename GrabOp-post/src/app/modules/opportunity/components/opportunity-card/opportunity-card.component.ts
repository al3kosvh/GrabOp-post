import { Component, Input, OnInit } from '@angular/core';
import { VOOpportunity } from '../../../../models/vos';

@Component({
    selector: 'app-opportunity-card',
    templateUrl: './opportunity-card.component.html',
    styleUrls: ['./opportunity-card.component.css']
})
export class OpportunityCardComponent implements OnInit {

    @Input() opportunity: VOOpportunity;

    constructor() { }

    ngOnInit() {
    }

}
