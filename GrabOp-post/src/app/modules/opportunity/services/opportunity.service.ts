import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { VOOpportunity, VOPost } from '../../../models/vos';

// Services
import { AuthHttpService } from "../../account/services/auth-http.service";
import { PostService } from '../../post/services/post.service';

@Injectable()
export class OpportunityService {

    myPost$: Observable<VOPost>;
    private myPostSub: BehaviorSubject<VOPost>;

    personPost$: Observable<VOPost>;
    private personPostSub: BehaviorSubject<VOPost>;

    opportunities$: Observable<VOOpportunity[]>;
    private opportunitiesSub: BehaviorSubject<VOOpportunity[]>;

    selectedOpportunity$: Observable<VOOpportunity>;
    private selectedOpportunitySub: BehaviorSubject<VOOpportunity>;

    constructor(
        private auth: AuthHttpService,
        private myPostsService: PostService
    ) {
        this.myPostSub = new BehaviorSubject(null);
        this.myPost$ = this.myPostSub.asObservable();

        this.personPostSub = new BehaviorSubject(null);
        this.personPost$ = this.personPostSub.asObservable();

        this.opportunitiesSub = new BehaviorSubject(null);
        this.opportunities$ = this.opportunitiesSub.asObservable();

        this.selectedOpportunitySub = new BehaviorSubject(null);
        this.selectedOpportunity$ = this.selectedOpportunitySub.asObservable();
    }

    getOpportunities() {

    }

    setOpportunity() {

    }


}
