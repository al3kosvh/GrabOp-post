import { VOAlliance, VOAllianceMember, VOPost, VOpost_attachment } from '../models/vos';
import {
    SOaccount_expanded, SOservice_expanded, Need_CreateNeed, Need_UpdateNeed,
    Offer_CreateOffer, Offer_UpdateOffer, SOv_account, SOalliance, SOalliance_member,
    SOupdate_profile_req, SOattachment
} from '../models/server-objects';
import { SONeedUpdateNeed } from '../models/sos';
//import { VOUserExt, VOUser } from '../modules/account/models/vouser';
import 'rxjs/add/operator/map';

// private mapPostSend(post:VOPost): SONeed_UpdateNeed {
// export function mapPostSend(post: VOPost): any {

export function mapAttachments_req(attachments: VOpost_attachment[]): SOattachment[] {
    if (attachments)
        return attachments.map(function (attachment) {
            return {
                Id: attachment.id,
                Name: attachment.name,
                Type: attachment.type,
                Prefix: attachment.prefix,
                IsDefault: attachment.is_default
            }
        });
}

export function mapPostSend_CreateNeed(post: VOPost): Need_CreateNeed {

    let attachments = mapAttachments_req(post.attachments);

    return {
        title: post.title,
        summary: post.description,
        // description: post.description,
        category_id: post.categoryId,
        is_exchange: post.isExchange,
        is_donation: post.isDonate,
        is_internship: post.isInternship,
        is_partnership: post.isPartnership,
        is_money: post.isMoney,
        commission_from: post.commissionFrom,
        commission_to: post.commissionTo,
        fixed_rate_from: post.fixedRateFrom,
        fixed_rate_to: post.fixedRateTo,
        hourly_rate_from: post.hourlyRateFrom,
        hourly_rate_to: post.hourlyRateTo,
        latitude: 24,
        longitude: 23,
        city: post.city,
        province: post.province,
        country: post.country,
        keywords: post.keywords ? post.keywords.split(',') : null,
        attachments: attachments,
        is_public: post.isPublic
    }
}

export function mapPostSend_UpdateNeed(post: VOPost): Need_UpdateNeed {

    let attachments = mapAttachments_req(post.attachments);

    return {
        id: post.id,
        title: post.title,
        summary: post.description,
        category_id: post.categoryId,
        is_exchange: post.isExchange,
        is_donation: post.isDonate,
        is_internship: post.isInternship,
        is_partnership: post.isPartnership,
        is_money: post.isMoney,
        commission_from: post.commissionFrom,
        commission_to: post.commissionTo,
        fixed_rate_from: post.fixedRateFrom,
        fixed_rate_to: post.fixedRateTo,
        hourly_rate_from: post.hourlyRateFrom,
        hourly_rate_to: post.hourlyRateTo,
        latitude: 24,
        longitude: 23,
        city: post.city,
        province: post.province,
        country: post.country,
        keywords: post.keywords ? post.keywords.split(',') : null,
        attachments: attachments,
        is_public: post.isPublic
    }
}

export function mapPostSend_CreateOffer(post: VOPost): Offer_CreateOffer {

    let attachments = mapAttachments_req(post.attachments);

    return {
        title: post.title,
        summary: post.description,
        // description: post.description,
        category_id: post.categoryId,
        is_exchange: post.isExchange,
        is_donation: post.isDonate,
        is_internship: post.isInternship,
        is_partnership: post.isPartnership,
        is_money: post.isMoney,
        commission_from: post.commissionFrom,
        commission_to: post.commissionTo,
        fixed_rate_from: post.fixedRateFrom,
        fixed_rate_to: post.fixedRateTo,
        hourly_rate_from: post.hourlyRateFrom,
        hourly_rate_to: post.hourlyRateTo,
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

export function mapPostSend_UpdateOffer(post: VOPost): Offer_UpdateOffer {

    let attachments = mapAttachments_req(post.attachments);

    return {
        id: post.id,
        title: post.title,
        summary: post.description,
        // description: post.description,
        category_id: post.categoryId,
        is_exchange: post.isExchange,
        is_donation: post.isDonate,
        is_internship: post.isInternship,
        is_partnership: post.isPartnership,
        is_money: post.isMoney,
        commission_from: post.commissionFrom,
        commission_to: post.commissionTo,
        fixed_rate_from: post.fixedRateFrom,
        fixed_rate_to: post.fixedRateTo,
        hourly_rate_from: post.hourlyRateFrom,
        hourly_rate_to: post.hourlyRateTo,
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

        owner_id: post.ownerId,
        is_available: post.isAvailable,
        // portafolio: 'some portfolio',
        // alliance: post.alliance
    }
}

export function mapAllianceMember(alliance_members: SOalliance_member[]): VOAllianceMember[] {
    // console.log('mapAllianceMember');

    return alliance_members.map(function (alliance_member) {
        return {
            allianceid: alliance_member.allianceid,
            membershipStatus: alliance_member.membership_status,
            hasTasks: alliance_member.has_tasks,

            id: alliance_member.id,
            role: alliance_member.type,
            userName: alliance_member.user_name,
            primaryEmail: alliance_member.primary_email,
            displayName: alliance_member.display_name,
            phoneNumber: alliance_member.phone_number,
            profile_pic: alliance_member.profile_pic,
            jobtitle: alliance_member.jobtitle,
            company: alliance_member.company,
            firstName: alliance_member.first_name,
            lastName: alliance_member.last_name,
            occupation: alliance_member.occupation,
            url: alliance_member.url,
            description: alliance_member.description,
            offers: alliance_member.offers,
            needs: alliance_member.needs,
            numberOfOpps: alliance_member.number_of_opps,
            distance: alliance_member.distance
        };
    });
}

export function mapAlliance(alliance: SOalliance): VOAlliance {
    // console.log('mapAlliance');

    return {
        id: alliance.id,
        isBlackBox: alliance.is_black_box,
        isOpen: alliance.is_open,
        isMemberTotalVisible: alliance.is_member_total_visible,
        isActive: alliance.is_active,
        createdDate: alliance.created_date,
        offerid: alliance.offerid,
        // members: alliance.members,
        // members: VOAllianceMember[];
        alliance_members_count: alliance.alliance_members_count
    }
}

export function mapGetPost(res): any {

    let service: SOservice_expanded = res;

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
        description: service.summary,
        createdDate: service.created_date,
        categoryId: service.category_id,
        isExchange: service.is_exchange,
        isDonate: service.is_donation,
        isInternship: service.is_internship,
        isPartnership: service.is_partnership,
        isMoney: true,
        commissionFrom: service.commission_from,
        commissionTo: service.commission_to,
        fixedRateFrom: service.fixed_rate_from,
        fixedRateTo: service.fixed_rate_to,
        hourlyRateFrom: service.hourly_rate_from,
        hourlyRateTo: service.hourly_rate_to,
        latitude: service.latitude,
        longitude: service.longitude,
        city: service.city,
        province: service.province,
        country: service.country,
        isAvailable: service.is_available,
        isPublic: service.is_public,
        keywords: service.keywords ? service.keywords.join(', ') : null,
        // keywords:  service.keywords?service.keywords.split(','):null,
        // keywords:  service.keywords?service.keywords:null,
        // pictures: [],
        // videos:[],
        // documents: [''],
        ownerId: service.owner_id,
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
        visitCount: service.visit_count
    }
}

export function mapGetPosts(res): any[] {

    let services: SOservice_expanded[] = res ? res : [];

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
            description: service.summary,
            createdDate: service.created_date,
            categoryId: service.category_id,
            isExchange: service.is_exchange,
            isDonate: service.is_donation,
            isInternship: service.is_internship,
            isPartnership: service.is_partnership,
            isMoney: true,
            commissionFrom: service.commission_from,
            commissionTo: service.commission_to,
            fixedRateFrom: service.fixed_rate_from,
            fixedRateTo: service.fixed_rate_to,
            hourlyRateFrom: service.hourly_rate_from,
            hourlyRateTo: service.hourly_rate_to,
            latitude: service.latitude,
            longitude: service.longitude,
            city: service.city,
            province: service.province,
            country: service.country,
            isAvailable: service.is_available,
            isPublic: service.is_public,
            keywords: service.keywords ? service.keywords.join(', ') : null,
            // keywords:  service.keywords?service.keywords.split(','):null,
            // keywords:  service.keywords?service.keywords:null,
            // pictures: [],
            // videos:[],
            // documents: [''],
            ownerId: service.owner_id,
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
            visitCount: service.visit_count
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

    let account: SOaccount_expanded = res;
    //  console.log('mapGetPerson res', res);
    return {
        id: account.id,
        // sessionId: account,
        // userId:account,
        type: account.type,
        username: account.user_name,
        // password:account,
        primaryEmail: account.primary_email,
        // emailVisible: account,
        displayName: account.display_name,
        // token: account,
        // isLogin: account,
        firstName: account.first_name,
        lastName: account.last_name,

        backgroundImage: account.background_pic,
        video: account.bideo, // ????? bideo
        resume: account.resume,
        province: account.province,
        city: account.city,
        country: account.country,
        latitude: account.latitude,
        longitude: account.longitude,
        skillset: account.skillset,
        interests: account.interests,
        profileImage: account.profile_pic,
        jobtitle: account.jobtitle,
        company: account.company,
        occupation: account.occupation,
        url: account.url,
        description: account.description,
        phoneNumber: account.phone_number,
        // phoneVisible: account,
        distance: account.distance,
        offers: account.offers,
        needs: account.needs,
        numberOfOpps: account.number_of_opps
    }
}

export function mapUpdateProfileClientToServer(user: Models.VOUserExt): any {
    const map = {
        id: 'id',
        sessionId: 'session_id',
        userId: 'user_id',
        role: 'role',
        username: 'name',
        password: 'password',
        primaryEmail: 'email',
        emailVisible: 'email_visible',
        displayName: 'display_name',
        token: 'token',
        isLogin: 'isLogin',
        firstName: 'firstname',
        lastName: 'lastname',
        background_pic: 'background_pic',
        video: 'video',
        resume: 'resume',
        province: 'province',
        city: 'city',
        country: 'country',
        latitude: 'latitude',
        longitude: 'longitude',
        skillset: 'skillset',
        interests: 'interests',
        profileImage: 'profile_pic',
        jobtitle: 'jobtitle',
        company: 'company',
        occupation: 'occupation',
        url: 'url',
        description: 'description',
        phoneNumber: 'phone',
        phoneVisible: 'phone_visible',
        distance: 'distance',
        offers: 'offers',
        needs: 'needs',
        numberOfOpps: 'number_of_opps',
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
export function mapUploadRes(res: any): VOpost_attachment {
    let result = res;
    return {
        name: result.public_id + '.' + result.format,
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
        firstName: user.first_name,
        lastName: user.last_name,
        displayName: user.display_name,
        primaryEmail: user.primary_email,
        username: user.user_name,
        role: user.type,
        phoneNumber: user.phone_number,
        profileImage: user.profile_pic,
        backgroundImage: user.background_pic,
        jobtitle: user.jobtitle,
        company: user.company,
        description: user.description,
        distance: user.distance,
        numberOfOpps: user.number_of_opps,
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
        id: authResponse.user_id,
        sessionId: authResponse.session_id,
        displayName: authResponse.display_name,
        username: authResponse.user_name,
        primaryEmail: "",
        firstName: "",
        lastName: "",
        token: { value: authResponse.session_id }
    }
}

export function mapRegisterParametersVOToSO(rp: Models.VORegisterParameters): Models.SORegisterParameters {
    return {
        UserName: rp.username,
        FirstName: rp.firstName,
        LastName: rp.lastName,
        DisplayName: rp.displayName,
        Email: rp.email,
        Password: rp.password,
        AutoLogin: rp.autoLogin,
        Continue: rp.continue,
    }
}
