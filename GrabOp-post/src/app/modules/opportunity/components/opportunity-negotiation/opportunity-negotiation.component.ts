import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VOPost } from '../../../../models/vos';

// Services
import { OpportunityService } from '../../services/opportunity.service';
import { PostService } from '../../../post/services/post.service';
import { AuthenticationService } from '../../../account/services/authentication.service';
import { VOUserExt } from '../../../account/models/vouser';

@Component({
    selector: 'app-opportunity-negotiation',
    templateUrl: './opportunity-negotiation.component.html',
    styleUrls: ['./opportunity-negotiation.component.css']
})
export class OpportunityNegotiationComponent implements OnInit {

    idNeedPost: number;
    idOfferPost: number;

    myUser: VOUserExt = new VOUserExt();

    myPost: VOPost = new VOPost({});
    personPost: VOPost = new VOPost({});

    constructor(private aroute: ActivatedRoute,
        private auth: AuthenticationService,
        private personPostsService: PostService,
        private opportunityService: OpportunityService) {
        this.auth.getUser().subscribe(res => {
            this.myUser = res;
            console.log('myUser', this.myUser);
        });
    }

    ngOnInit() {
        this.aroute.params.subscribe(params => {
            console.log(params);
            this.idNeedPost = +params['idNeedPost'];
            this.idOfferPost = +params['idOfferPost'];
            if (isNaN(this.idNeedPost) || isNaN(this.idOfferPost)) {
                console.error(' please provide ID for service to edit');
                return
            }
            console.log('this.idNeedPost', this.idNeedPost);
            console.log('this.idOfferPost', this.idOfferPost);
            //this.myPostsService.getMyPostById(this.idNeedPost).subscribe(res => {
            //    this.myPost = res;
            //    console.log('selectMyPostById MY', res);
            //});
            this.personPostsService.getPostById(this.idOfferPost).subscribe(res => {
                this.personPost = res;
                console.log('selectMyPostById PERSON', res);
            });
            // this.loadPost(id);
        });
        // this.myPostsService.getMyPosts().subscribe(res => {
        //   console.log('getMyPosts', res);
        // });

    }

    submitAllChanges() {
        console.log('submitAllChanges');
    }

    signAgreement() {
        console.log('signAgreement');
    }

    endNegotiation() {
        console.log('endNegotiation');
    }

}
