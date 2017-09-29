import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatGridListModule, MatIconModule } from '@angular/material';

// Components
import { OpportunityComponent } from './components/opportunity/opportunity.component';
import { OpportunityNegotiationComponent } from './components/opportunity-negotiation/opportunity-negotiation.component';
import { OpportunityOverviewComponent } from './components/opportunity-overview/opportunity-overview.component';
import { OpportunityCardComponent } from './components/opportunity-card/opportunity-card.component';

// Services
import { OpportunityService } from './services/opportunity.service';

import { SharedModule } from '../shared/shared.module';
import { PostModule } from '../post/post.module';

const route: Routes = [
    //{ path: 'negotiation', component: OpportunityNegotiationComponent },
    //{ path: 'negotiation/:idNeedPost/:idOfferPost', component: OpportunityNegotiationComponent },
    //{ path: 'overview', component: OpportunityOverviewComponent }
];

@NgModule({
    imports: [
        CommonModule,
        MatGridListModule,
        MatIconModule,
        RouterModule.forChild(route),
        SharedModule,
        PostModule
    ],
    declarations: [
        OpportunityComponent,
        OpportunityNegotiationComponent,
        OpportunityOverviewComponent,
        OpportunityCardComponent
    ],
    providers: [
        OpportunityService
    ]
})
export class OpportunityModule { }
