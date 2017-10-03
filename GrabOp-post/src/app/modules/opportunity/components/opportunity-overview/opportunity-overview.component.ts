import { Component, OnInit } from '@angular/core';
import { VOOpportunity } from '../../../../models/vos';

// Service
import { OpportunityService } from '../../services/opportunity.service';

@Component({
    selector: 'app-opportunity-overview',
    templateUrl: './opportunity-overview.component.html',
    styleUrls: ['./opportunity-overview.component.css']
})
export class OpportunityOverviewComponent implements OnInit {

    opportunitiesPending: VOOpportunity[];
    opportunitiesActive: VOOpportunity[];
    opportunitiesComplete: VOOpportunity[];

    constructor(
        private opportunityService: OpportunityService
    ) { }

    ngOnInit() {
    }

}
