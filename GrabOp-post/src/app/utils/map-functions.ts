import { VOAlliance, VOAllianceMember, VOPost, VOPostAttachment } from '../models/vos';
import {
    SOAccountExpanded, SOServiceExpanded, CreateNeed, UpdateNeed,
    CreateOffer, UpdateOffer, SOvAccount, SOAlliance, SOAllianceMember,
    SOUpdateProfileReq, SOAttachment
} from '../models/server-objects';
import { SONeedUpdateNeed } from '../models/sos';
//import { VOUserExt, VOUser } from '../modules/account/models/vouser';
import 'rxjs/add/operator/map';

// private mapPostSend(post:VOPost): SONeed_UpdateNeed {
// export function mapPostSend(post: VOPost): any {

export function mapAttachmentsReq(attachments: VOPostAttachment[]): SOAttachment[] {
    if (attachments)
        return attachments.map(function (attachment) {
            return {
                id: attachment.id,
                name: attachment.name,
                type: attachment.type,
                prefix: attachment.prefix,
                isDefault: attachment.isDefault
            }
        });
}

export function mapPostSendCreateNeed(post: VOPost): CreateNeed {

    let attachments = mapAttachmentsReq(post.attachments);

    return {
        title: post.title,
        summary: post.summary,
        categoryId: post.categoryId,
        isExchange: post.isExchange,
        isDonation: post.isDonate,
        isInternship: post.isInternship,
        isPartnership: post.isPartnership,
        isMoney: post.isMoney,
        commissionFrom: post.commissionFrom,
        commissionTo: post.commissionTo,
        fixedRateFrom: post.fixedRateFrom,
        fixedRateTo: post.fixedRateTo,
        hourlyRateFrom: post.hourlyRateFrom,
        hourlyRateTo: post.hourlyRateTo,
        latitude: 24,
        longitude: 23,
        city: post.city,
        province: post.province,
        country: post.country,
        keywords: post.keywords ? post.keywords.split(',') : null,
        attachments: attachments,
        isPublic: post.isPublic
    }
}

export function mapPostSendUpdateNeed(post: VOPost): UpdateNeed {

    let attachments = mapAttachmentsReq(post.attachments);

    return {
        id: post.id,
        title: post.title,
        summary: post.summary,
        categoryId: post.categoryId,
        isExchange: post.isExchange,
        isDonation: post.isDonate,
        isInternship: post.isInternship,
        isPartnership: post.isPartnership,
        isMoney: post.isMoney,
        commissionFrom: post.commissionFrom,
        commissionTo: post.commissionTo,
        fixedRateFrom: post.fixedRateFrom,
        fixedRateTo: post.fixedRateTo,
        hourlyRateFrom: post.hourlyRateFrom,
        hourlyRateTo: post.hourlyRateTo,
        latitude: 24,
        longitude: 23,
        city: post.city,
        province: post.province,
        country: post.country,
        keywords: post.keywords ? post.keywords.split(',') : null,
        attachments: attachments,
        isPublic: post.isPublic
    }
}

export function mapPostSendCreateOffer(post: VOPost): CreateOffer {

    let attachments = mapAttachmentsReq(post.attachments);

    return {
        title: post.title,
        summary: post.summary,
        categoryId: post.categoryId,
        isExchange: post.isExchange,
        isDonation: post.isDonate,
        isInternship: post.isInternship,
        isPartnership: post.isPartnership,
        isMoney: post.isMoney,
        commissionFrom: post.commissionFrom,
        commissionTo: post.commissionTo,
        fixedRateFrom: post.fixedRateFrom,
        fixedRateTo: post.fixedRateTo,
        hourlyRateFrom: post.hourlyRateFrom,
        hourlyRateTo: post.hourlyRateTo,
        latitude: 24,
        longitude: 23,
        city: post.city,
        province: post.province,
        country: post.country,
        keywords: post.keywords ? post.keywords.split(',') : null,
        attachments: attachments
        // keywords:  post.keywords?post.keywords:null,
        // pictures: [],
        // videos:[],
        // documents: [''],

        // ownerid: post.ownerId,
        // is_available: post.isAvailable,
        // isAllianceOpen: ;
        // isAllianceBlackBox: ;
        // isAllianceMemberTotalVisible: ;
        // allianceMembers:	;
        // portafolio: 'some portfolio',
        // alliance: post.alliance
    }
}

export function mapPostSendUpdateOffer(post: VOPost): UpdateOffer {

    let attachments = mapAttachmentsReq(post.attachments);

    return {
        id: post.id,
        title: post.title,
        summary: post.summary,        
        categoryId: post.categoryId,
        isExchange: post.isExchange,
        isDonation: post.isDonate,
        isInternship: post.isInternship,
        isPartnership: post.isPartnership,
        isMoney: post.isMoney,
        commissionFrom: post.commissionFrom,
        commissionTo: post.commissionTo,
        fixedRateFrom: post.fixedRateFrom,
        fixedRateTo: post.fixedRateTo,
        hourlyRateFrom: post.hourlyRateFrom,
        hourlyRateTo: post.hourlyRateTo,
        latitude: 24,
        longitude: 23,
        city: post.city,
        province: post.province,
        country: post.country,
        keywords: post.keywords ? post.keywords.split(',') : null,
        attachments: attachments,
        // keywords:  post.keywords?post.keywords:null,
        // pictures: [],
        // videos:[],
        // documents: [''],

        ownerId: post.ownerId,
        isAvailable: post.isAvailable,
        // portafolio: 'some portfolio',
        // alliance: post.alliance
    }
}

export function mapAllianceMember(allianceMembers: SOAllianceMember[]): VOAllianceMember[] {
    // console.log('mapAllianceMember');

    return allianceMembers.map(function (allianceMember) {
        return {
            allianceId: allianceMember.allianceId,
            membershipStatus: allianceMember.membershipStatus,
            hasTasks: allianceMember.hasTasks,
            id: allianceMember.id,
            role: allianceMember.type,
            username: allianceMember.userName,
            primaryEmail: allianceMember.primaryEmail,
            displayName: allianceMember.displayName,
            phoneNumber: allianceMember.phoneNumber,
            profilePic: allianceMember.profilePic,
            jobTitle: allianceMember.jobTitle,
            company: allianceMember.company,
            firstName: allianceMember.firstName,
            lastName: allianceMember.lastName,
            occupation: allianceMember.occupation,
            url: allianceMember.url,
            description: allianceMember.description,
            offers: allianceMember.offers,
            needs: allianceMember.needs,
            numberOfOpps: allianceMember.numberOfOpps,
            distance: allianceMember.distance
        };
    });
}

export function mapAlliance(alliance: SOAlliance): VOAlliance {
    // console.log('mapAlliance');

    return {
        id: alliance.id,
        isBlackBox: alliance.isBlackBox,
        isOpen: alliance.isOpen,
        isMemberTotalVisible: alliance.isMemberTotalVisible,
        isActive: alliance.isActive,
        createdDate: alliance.createdDate,
        offerId: alliance.offerId,
        // members: alliance.members,
        // members: VOAllianceMember[];
        allianceMembersCount: alliance.allianceMembersCount
    }
}

export function mapGetPost(res): any {

    let service: SOServiceExpanded = res;

    let alliance: VOAlliance;
    let allianceMember: VOAllianceMember[];

    if (service.alliance) {
        alliance = mapAlliance(service.alliance);
        if (service.alliance.members) allianceMember = mapAllianceMember(service.alliance.members);
        // if(service.alliance.members.length) allianceMember = mapAllianceMember(service.alliance.members);
    }

    return {
        id: service.id,
        title: service.title,
        type: service.type, // 'need'
        summary: service.summary,
        createdDate: service.createdDate,
        categoryId: service.categoryId,
        isExchange: service.isExchange,
        isDonate: service.isDonation,
        isInternship: service.isInternship,
        isPartnership: service.isPartnership,
        isMoney: true,
        commissionFrom: service.commissionFrom,
        commissionTo: service.commissionTo,
        fixedRateFrom: service.fixedRateFrom,
        fixedRateTo: service.fixedRateTo,
        hourlyRateFrom: service.hourlyRateFrom,
        hourlyRateTo: service.hourlyRateTo,
        latitude: service.latitude,
        longitude: service.longitude,
        city: service.city,
        province: service.province,
        country: service.country,
        isAvailable: service.isAvailable,
        isPublic: service.isPublic,
        keywords: service.keywords ? service.keywords.join(', ') : null,
        // keywords:  service.keywords?service.keywords.split(','):null,
        // keywords:  service.keywords?service.keywords:null,
        // pictures: [],
        // videos:[],
        // documents: [''],
        ownerId: service.ownerId,
        portfolio: service.portafolio,
        status: service.status,
        // alliance: service.alliance,  // ??????
        alliance: alliance,
        allianceMembers: allianceMember ? allianceMember : [],
        // alliance: mapAlliance(service.alliance),
        // allianceMembers: mapAllianceMember(service.alliance.members),
        attachments: service.attachments ? service.attachments : [],
        isOpenToAllianace: true,
        isVisibleToPublic: true,
        visitCount: service.visitCount
    }
}

export function mapGetPosts(res): any[] {

    let services: SOServiceExpanded[] = res ? res : [];

    // let posts: any = res;
    // console.log('mapGetMyPosts res.json', res);
    return services.map(function (service) {
        // console.log('remap posts 2', service);
        let alliance: VOAlliance;
        let allianceMember: VOAllianceMember[];

        if (service.alliance) {
            alliance = mapAlliance(service.alliance);
            if (service.alliance.members) allianceMember = mapAllianceMember(service.alliance.members);
            // if(service.alliance.members.length) allianceMember = mapAllianceMember(service.alliance.members);
        }

        return {
            id: service.id,
            title: service.title,
            type: service.type, // 'need'
            // summary: service.summary,
            summary: service.summary,
            createdDate: service.createdDate,
            categoryId: service.categoryId,
            isExchange: service.isExchange,
            isDonate: service.isDonation,
            isInternship: service.isInternship,
            isPartnership: service.isPartnership,
            isMoney: true,
            commissionFrom: service.commissionFrom,
            commissionTo: service.commissionTo,
            fixedRateFrom: service.fixedRateFrom,
            fixedRateTo: service.fixedRateTo,
            hourlyRateFrom: service.hourlyRateFrom,
            hourlyRateTo: service.hourlyRateTo,
            latitude: service.latitude,
            longitude: service.longitude,
            city: service.city,
            province: service.province,
            country: service.country,
            isAvailable: service.isAvailable,
            isPublic: service.isPublic,
            keywords: service.keywords ? service.keywords.join(', ') : null,
            // keywords:  service.keywords?service.keywords.split(','):null,
            // keywords:  service.keywords?service.keywords:null,
            // pictures: [],
            // videos:[],
            // documents: [''],
            ownerId: service.ownerId,
            portfolio: service.portafolio,
            status: service.status,
            // alliance: service.alliance,  // ??????
            alliance: alliance,
            // allianceMembers: allianceMember,
            allianceMembers: allianceMember ? allianceMember : [],
            // alliance: mapAlliance(service.alliance),
            // allianceMembers: mapAllianceMember(service.alliance.members),
            attachments: service.attachments ? service.attachments : [],
            isOpenToAllianace: true,
            isVisibleToPublic: true,
            visitCount: service.visitCount
        };
    });
}

// export function mapGetMyUser(res): VOUser {
//
//   let account: SOv_account = res;
//   console.log('mapGetMyUser res.json', res);
//   return {
//     id: account.id,
//     // type: account.type,
//     // sessionId: account,
//     // userId:account,
//     // role: account.type,
//     username: account.user_name,
//     // password:account,
//     primaryEmail: account.primary_email,
//     // emailVisible: account,
//     displayName: account.display_name,
//     // token: account,
//     // isLogin: account,
//     firstName: account.first_name,
//     lastName: account.last_name,
//
//     background_pic: account.background_pic,
//     video: account.bideo, // ????? bideo
//     resume: account.resume,
//     province: account.province,
//     city: account.city,
//     country: account.country,
//     latitude: account.latitude,
//     longitude: account.longitude,
//     skillset: account.skillset,
//     interests: account.interests,
//     profile_pic: account.profile_pic,
//     jobtitle: account.jobtitle,
//     company: account.company,
//     occupation: account.occupation,
//     url: account.url,
//     description: account.description,
//     phoneNumber: account.phone_number,
//     // phoneVisible: account,
//     distance: account.distance,
//     offers: account.offers,
//     needs: account.needs,
//     numberOfOpps: account.number_of_opps
//   }
// }

export function mapGetPerson(res): Models.VOUserExt {

    let account: SOAccountExpanded = res;
    //  console.log('mapGetPerson res', res);
    return {
        id: account.id,
        // sessionId: account,
        // userId:account,
        type: account.type,
        username: account.userName,
        // password:account,
        primaryEmail: account.primaryEmail,
        // emailVisible: account,
        displayName: account.displayName,
        // token: account,
        // isLogin: account,
        firstName: account.firstName,
        lastName: account.lastName,

        backgroundImage: account.backgroundPic,
        video: account.bideo, // ????? bideo
        resume: account.resume,
        province: account.province,
        city: account.city,
        country: account.country,
        latitude: account.latitude,
        longitude: account.longitude,
        skillset: account.skillset,
        interests: account.interests,
        profileImage: account.profilePic,
        jobTitle: account.jobTitle,
        company: account.company,
        occupation: account.occupation,
        url: account.url,
        description: account.description,
        phoneNumber: account.phoneNumber,
        // phoneVisible: account,
        distance: account.distance,
        offers: account.offers,
        needs: account.needs,
        numberOfOpps: account.numberOfOpps
    }
}

export function mapUpdateProfileClientToServer(user: Models.VOUserExt): any {
    const map = {
        id: 'id',
        sessionId: 'sessionId',
        userId: 'userId',
        role: 'role',
        username: 'name',
        password: 'password',
        primaryEmail: 'email',
        emailVisible: 'emailVisible',
        displayName: 'displayName',
        token: 'token',
        isLogin: 'isLogin',
        firstName: 'firstName',
        lastName: 'lastName',
        backgroundPic: 'backgroundPic',
        video: 'video',
        resume: 'resume',
        province: 'province',
        city: 'city',
        country: 'country',
        latitude: 'latitude',
        longitude: 'longitude',
        skillset: 'skillset',
        interests: 'interests',
        profileImage: 'profilePic',
        jobTitle: 'jobTitle',
        company: 'company',
        occupation: 'occupation',
        url: 'url',
        description: 'description',
        phoneNumber: 'phone',
        phoneVisible: 'phoneVisible',
        distance: 'distance',
        offers: 'offers',
        needs: 'needs',
        numberOfOpps: 'numberOfOpps',
        type: 'type',
        post: 'post'
    };
    let tmp = {};
    for (let i in map) {
        if (i == 'id') {
            tmp['id'] = user.id;
            continue;
        }
        tmp[map[i]] = user[i];
    }
    if (!tmp['latitude']) {
        tmp['latitude'] = 0.0;
    }
    if (!tmp['longitude']) {
        tmp['longitude'] = 0.0;
    }
    if (!tmp['type']) {
        tmp['type'] = 'user';
    }
    return tmp;
}

// export function mapUploadRes(res: any): VOpost_attachment_ext{
export function mapUploadRes(res: any): VOPostAttachment {
    let result = res;
    return {
        name: result.publicId + '.' + result.format,
        type: 'image',
        // prefix: result.url.slice(result.url.indexOf("/upload/")+8, result.url.indexOf("/publicimages/")),
        prefix: 'v' + result.version,

        // url: result.url,
        // url_prefix: result.url.slice(0, result.url.indexOf("v" + result.version + "/")),
        // thumbnail: result.eager[0].url
    }
}

export function mapUserExtended(user: Models.SOUser): Models.VOUserExt {
    return {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        displayName: user.displayName,
        primaryEmail: user.primaryEmail,
        username: user.username,
        role: user.type,
        phoneNumber: user.phoneNumber,
        profileImage: user.profilePic,
        backgroundImage: user.backgroundPic,
        jobTitle: user.jobTitle,
        company: user.company,
        description: user.description,
        distance: user.distance,
        numberOfOpps: user.numberOfOpps,
        occupation: user.occupation,
        needs: user.needs,
        offers: user.offers,
        url: user.url,
        video: user.bideo,
        resume: user.resume,
        province: user.province,
        city: user.city,
        country: user.country,
        latitude: user.latitude,
        longitude: user.longitude,
        skillset: user.skillset,
        interests: user.interests
    }
}

export function mapAuthResponseToUser(authResponse: Models.SOAuthenticateResponse): Models.VOUser {
    return {
        id: authResponse.userId,
        sessionId: authResponse.sessionId,
        displayName: authResponse.displayName,
        username: authResponse.userName,
        primaryEmail: "",
        firstName: "",
        lastName: "",
        token: { value: authResponse.sessionId }
    }
}

export function mapRegisterParametersVOToSO(rp: Models.VORegisterParameters): Models.SORegisterParameters {
    return {
        userName: rp.username,
        firstName: rp.firstName,
        lastName: rp.lastName,
        displayName: rp.displayName,
        email: rp.email,
        password: rp.password,
        autoLogin: rp.autoLogin,
        continue: rp.continue,
    }
}
