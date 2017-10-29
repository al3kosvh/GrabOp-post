import { Pipe, PipeTransform } from '@angular/core';
import { VOAllianceMember, VOPost } from '../../../models/vos';

@Pipe({
    name: 'postsFilterAlliance'
})
export class PostsFilterAlliancePipe implements PipeTransform {

    allianceMember(post: VOPost, filterParamId: number, filterParamStatus: string): boolean {
        let AM: boolean = false;
        post.allianceMembers.forEach(allianceMember => {
            if (allianceMember.id == filterParamId && allianceMember.membershipStatus === filterParamStatus) {
                AM = true;
            }
        });
        return AM;
    }

    notAllianceMember(post: VOPost, filterParamId: number) {
        let NAM: boolean = true;
        post.allianceMembers.forEach(allianceMember => {
            if (allianceMember.id == filterParamId) {
                NAM = false;
            }
        });
        return NAM;
    }

    transform(posts: VOPost[], filterParamId?: number, filterParamStatus?: string): any {
        // console.log('filterParamId', filterParamId);
        // console.log('filterParamStatus', filterParamStatus);
        if (!posts || !filterParamId || !filterParamStatus) {
            return posts;
        }

        if (filterParamStatus === 'notMember') {
            return posts.filter(post => this.notAllianceMember(post, filterParamId));
        }

        if (filterParamStatus === "Sent" || filterParamStatus === "Confirmed") {
            return posts.filter(post => this.allianceMember(post, filterParamId, filterParamStatus));
        }




        // if(filterParamStatus === "Sent"){
        //   return posts.filter(post => {
        //     if (post.allianceMembers){
        //       console.log('post.allianceMembers Sent', post);
        //       return post.allianceMembers.filter(allianceMember => {
        //         if(allianceMember.id == filterParamId && allianceMember.membershipStatus === 'Sent') {
        //           console.log('filterParamStatus Sent', post);
        //           return post;
        //         }
        //       });
        //     }
        //   });
        // }

        // if(filterParamStatus === "Sent"){
        //   return posts.filter(post => {
        //     if (post.allianceMembers && this.allianceMemberSent(post, filterParamId)){
        //       return post;
        //     }
        //   });
        // }

        // if(filterParamStatus === "Sent"){
        //   return posts.filter(post => {
        //     if (post.allianceMembers.length && this.allianceMemberSent(post, filterParamId)){
        //       return post;
        //     }
        //   });
        // }

        // if(filterParamStatus === "Sent"){
        //   return posts.filter(post => {
        //     if (post.allianceMembers.length && post.allianceMembers.forEach(allianceMember => {
        //         if(allianceMember.id == filterParamId && allianceMember.membershipStatus === 'Sent') {
        //           console.log('filterParamStatus Sent', post);
        //           return true;
        //         }
        //       })){
        //       return post;
        //     }
        //   });
        // }

        // if(filterParamStatus === "Sent"){
        //   return posts.filter(post => {
        //     return post.allianceMembers.filter(allianceMember => {
        //       if(allianceMember.id == filterParamId && allianceMember.membershipStatus === 'Sent') {
        //         console.log('filterParamStatus Sent', post);
        //         return post;
        //       }
        //     });
        //   });
        // }


        // if(filterParamStatus === "Confirmed"){
        //   posts.filter(post => {
        //     if (post.allianceMembers.length){
        //       console.log('post.allianceMembers Confirmed', post);
        //       post.allianceMembers.filter(allianceMember => {
        //         if(allianceMember.id == filterParamId && allianceMember.membershipStatus === 'Confirmed') {
        //           console.log('filterParamStatus Confirm', post);
        //           return post;
        //         }
        //       });
        //     }
        //   });
        // }

        // if(filterParam == "offer"){
        //   return posts.filter(function(post) {
        //     if (post.type == "offer") return post;
        //   });
        // }

    }

}
