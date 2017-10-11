
import { VOUser, VOUserExt } from '../modules/account/models/vouser';
/**
 * Created by Vlad on 9/6/2016.
 */


export class VOPerson extends VOUser {

}

export class VOCategory {
    id: number;
    label: string;

    constructor(obj: any) {
        for (let str in obj) this[str] = obj[str];
    }
}

export class VONavigationItem {
    id: number;
    label: string;
    href: string;
    glyph: string;

    constructor(obj: any) {
        for (let str in obj) this[str] = obj[str];
    }
}
export class VONavigation {
    version: string;
    name: string;
    css: any;
    list: VONavigationItem[];

    constructor(obj: any) {
        for (let str in obj) this[str] = obj[str];
        this.list = this.list.map(function (item) {
            return new VONavigationItem(item)
        })

    }
}

export enum ImageType {
    THUMB,
    SMALL,
    MEDIUM,
    LARGE,
    XLARGE
}

export class VOImage {

    src: string;
    id: number;
    name: string;
    type: ImageType;
    prefix: number;
    isDefault: string;
    dirty: boolean;
    selected: boolean;
    posts_id: number;

    constructor(data: any) {
        for (var str in data) this[str] = data[str];
    }
}

export class VOpost_attachment {
    parentid?: number;
    id?: number;
    name: string;
    type: string;
    prefix: string;
    is_default?: boolean;

    selected?: boolean;

    constructor(data: any) {
        for (var str in data) this[str] = data[str];
    }
}

// export class VOpost_attachment_ext extends VOpost_attachment{
//   selected?: boolean;
//
//   url: string;
//   url_prefix: string;
//   thumbnail: string;
//
//   constructor(data: any) {
//     super(data);
//     for (var str in data)this[str] = data[str];
//   }
// }

// export class VOAttachment<VOImage> {
//   id: number;
//   name: string;
//   type: string;
//   prefix: number;
//   isDefault: string;
//   src: string;
//
//   constructor(data: any) {
//     for (var str in data)this[str] = data[str];
//   }
// }

export class VOMember {
    id: number;
    role: string;
    userName: string;
    primaryEmail: string;
    displayName: string;
    phoneNumber: string;
    profile_pic: string;
    jobtitle: string;
    company: string;
    firstName: string;
    lastName: string;
    occupation?: number;
    url: string;
    description: string;
    offers: number;
    needs: number;
    numberOfOpps?: number;
    distance?: number;

    constructor(data: any) {
        for (var str in data) this[str] = data[str];
    }
}

export class VOAllianceMember extends VOMember {
    allianceid?: number;
    membershipStatus: string;
    hasTasks: boolean;
}

export class VOAlliance {
    id: number;
    isBlackBox: boolean;
    isOpen: boolean;
    isMemberTotalVisible: boolean;
    isActive: boolean;
    createdDate: Date;
    offerid: number;
    // members: any;
    // members: VOAllianceMember[];
    alliance_members_count: number;
    constructor(data: any) {
        for (var str in data) this[str] = data[str];
    }
}


export class VOPost {

    static NEED: string = 'need';
    static OFFER: string = 'offer';

    id: number;
    title: string;
    // summary: string;     // is it description ???
    description: string; // is it summary ???
    createdDate: Date;
    categoryId: number;
    city: string;
    province: string;
    country: string;
    keywords: string;
    visitCount: number;
    ownerId: number;


    isPartnership: boolean;
    isExchange: boolean;
    isDonate: boolean;
    isInternship: boolean;
    isMoney: boolean;
    isPublic: boolean;
    isAvailable: boolean;
    // fixed: number;
    fixedRateFrom?: number;
    fixedRateTo?: number;
    // hourlyRate: number;
    hourlyRateFrom?: number;
    hourlyRateTo?: number;
    // commission: number;
    commissionFrom?: number;
    commissionTo?: number;
    portfolio?: string;
    status?: number;
    attachments?: VOpost_attachment[];
    alliance?: VOAlliance;
    allianceMembers?: VOAllianceMember[];

    latitude?: number;
    longitude?: number;

    isOpenToAllianace: boolean;
    isVisibleToPublic: boolean;


    type: string;
    selected: boolean;

    isSelected?: boolean;

    constructor(obj: any) {
        for (let str in obj) this[str] = obj[str];
    }
}


export class VOService extends VOPost {

    alliance: VOAlliance;


    /*
     nostyle:boolean;
     image:string;
     fixedPrice:number;
     hourlyRateFrom:number;
     hourlyRateTo:number;


     matchPercentage:number;
     numberReviews:number;
     numberTrades:number;
     numberViews:number;
     serviceExchange:boolean;
     serviceRating:number;
     serviceType:number;
     summary:string;*/
    user: VOMember;

    recommenderUser: VOMember;

    constructor(obj: any) {
        super(obj);

        if (this.alliance) this.alliance = new VOAlliance(this.alliance);
        if (this.recommenderUser) this.recommenderUser = new VOMember(this.recommenderUser);
        if (this.user) this.user = new VOMember(this.user);
    }
}




export class VOAccountSettings {
    connection_requests: boolean;
    new_messages: boolean;
    alliance_notifications: boolean;
    task_notifications: boolean;
    service_notifications: boolean;

    phone_number: boolean;
    email_addres: boolean;
    connections: boolean;
    profile_views_count: boolean;
    service_views_count: boolean;
    total_number_people: boolean;
    total_number_members: boolean;
    total_sales: boolean;

    constructor(obj: any) {
        for (let str in obj) this[str] = obj[str];
    }
}

export class VOOpportunity {
    is_loged_in: boolean;
    oportunity_id: number;
    post_id_by_parent: number;
    post_id: number[];
    project_id: number[];
    business_style_id_by_owner: number[];
    // (list) business_style_id [mond]: any;
    business_style_appropriete: any;
    business_style_changed: any;
    // monetary:{type,amount}: any;
    business_style_match: any;
    monetary_match: any;
    status_id: number;
    first_party_status_id: number;
    second_party_status_id: number;
    comments_id: number[];
    last_comment: string;
    notifications: string[];
    // role (owner of opp left side of screen person B): any;
    // (list) person: {person_id, status_id}: any;
    // signed (list) person_id: any;
    // (list)transactions: any;
    is_post_signed_done: boolean;
    is_ended: boolean;
}


export class VOSettings {
    // static server: string = 'http://grabop2api-dev.us-west-2.elasticbeanstalk.com/api/v1';
    static server: string = 'http://localhost:53822/api/v1';

    static checkEmailExistence: string = VOSettings.server + '/checkforemailexistence/{{email}}?format=json';
    static connection_GetProfileConnectionsCount: string = VOSettings.server + '/profiles/{{id}}/connectionsCount/?format=json';
    static connection_GetMyConnections: string = VOSettings.server + '/myconnections/?format=json';
    static connection_GetProfileConnections: string = VOSettings.server + '/profiles/{{id}}/connections/?format=json';
    static connection_MakeRequest: string = VOSettings.server + '/profiles/{{sender}}/connectionsInvite/{{receiver}}?format=json';
    static createNeedPost: string = VOSettings.server + '/services/needs?format=json';
    static createOfferPost: string = VOSettings.server + '/services/offers?format=json';
    static getMyPosts: string = VOSettings.server + '/services/myservices?format=json';
    static getPostById: string = VOSettings.server + '/services/{{id}}?format=json';
    static getPosts: string = VOSettings.server + '/profiles/{{id}}/services?format=json';
    static images: string = 'http://res.cloudinary.com/al3kosvh/image/upload/';
    static images_small: string = 'http://res.cloudinary.com/al3kosvh/image/upload/';
    static myposts: string = 'myservices';
    static myProfile: string = VOSettings.server + '/profiles/me?format=json';
    static need: string = 'needs';
    static offer: string = 'offers';
    static posts: string = 'need-offer/';
    static profile: string = VOSettings.server + '/profiles/{{id}}?format=json';
    static register: string = VOSettings.server + '/register?format=json';
    static sendMessage: string = VOSettings.server + '/messages/{{id}}?format=json';
    static settings: string = VOSettings.server + '/profiles/{id}/settings?format=json';
    static signinUrl = VOSettings.server + '/auth?format=json';
    static signoutUrl = VOSettings.server + '/auth/logout?format=json';
    static SMALL: string = 't_thumbnail';
    static statistics: string = 'api/get_statistics.php';
    static toggleSetting: string = VOSettings.server + '/profiles/{id}/settings/{settingId}?format=json';
    static updateNeedPost: string = VOSettings.server + '/services/needs/{{id}}?format=json';
    static updateOfferPost: string = VOSettings.server + '/services/offers/{{id}}?format=json';
    static updateProfile: string = VOSettings.server + '/profiles/{{id}}/?format=json';
    static upload: string = 'api/upload.php';
    static verifyemail: string = VOSettings.server + '/verifyemail?format=json';

    // static settings: string = 'api/settings.php';
    //static _user: VOUser;

    //
    // static  set user_id(user_id: number) {
    //     VOSettings._user.id = user_id;
    // }

    static saveVisit(loc: any[]) {
        localStorage.setItem('lastVisit', JSON.stringify(loc));
    }

    static getVisit() {
        return JSON.parse(localStorage.getItem('lastVisit'));
    }
}

export class VOResult {
    error: string;
    success: string;
    insertId: number;
    message: string;
}


export class VOSearchResult {

}

export class VOSearch {
    pattern: string;
    country: string;
    province: string;
    city: string;
    partnership: boolean;
    exchange: boolean;
    donate: boolean;
    internship: boolean;
    money: boolean;
    fixedFrom: number;
    fixedTo: number;
    hourlyFrom: number;
    hourlyTo: number;
    commissionFrom: number;
    commissionTo: number;

    constructor(obj: any) {
        for (let str in obj) this[str] = obj[str];
    }

}
