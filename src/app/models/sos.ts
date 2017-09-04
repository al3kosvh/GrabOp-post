export interface SOAuthenticate {
    UserName: string;
    Password: string;
    provider: string;
    nonce: string;
    UseTokenCookie: boolean;
}

export interface SOAuthenticateResponse {
    UserId: string;
    SessionId: string;
    UserName: string;
    DisplayName: string;
    BearerToken: string;
    ResponseStatus: SOResponseStatus;
}

export interface SOResponseStatus {
    ErrorCode: string;
    Message: string;
    StackTrace: string;
    Errors: SOResponseError[];

}

// SOResponseError - made for myself
export interface SOResponseError {
    ErrorCode: string;
    FieldName: string;
    Message: string;
    Meta: any;
}

export interface SOvAccount {
    Id: number;
    type: string;
    userName: string;
    PrimaryEmail: string;
    displayName: string;
    PhoneNumber: string;
    profile_pic: string;
    jobtitle: string;
    company: string;
    firstName: string;
    lastName: string;
    occupation: number;
    url: string;
    description: string;
    offers: number;
    needs: number;
    numberOfOpps: number;
    distance: number;
}

export interface SOvAccountExpanded extends SOvAccount {
    background_pic: string;
    video: string;
    resume: string;
    province: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    skillset: string[];
    interests: string[];
}

export interface SORegister {
    UserName: string;
    FirstName: string;
    LastName: string;
    DisplayName: string;
    Email: string;
    Password: string;
    AutoLogin: boolean;
    Continue: string;
}

export interface SORegisterResponse {
    UserId: string;
    SessionId: string;
    UserName: string;
    ReferrerUrl: string;
    ResponseStatus: SOResponseStatus;
    Meta: any; // Dictionary<string, string> ?????????????????????

}

export interface SOUpdateProfile {
    id: number;
    email: string;
    post: string;        // ???
    phone: string;
    city: string;
    province: string;
    country: string;
    latitude: number;
    longitude: number;
    profile_pic: string;
    background_pic: string;
    video: string;
    resume: string;
    skillset: string[];
    interests: string[];

    type: string;

    firstname: string;
    lastname: string;

    occupation: number;

    jobtitle: string;
    company: string;
    name: string;        // ???
    url: string;
    description: string;

}


export interface SONeedCreateNeed {
  title: string;
  summary: string;
    categoryid: number;
  isExchange: boolean;
  isDonation: boolean;
  isInternship: boolean;
  isPartnership: boolean;
    commissionFrom: number;
    commissionTo: number;
    fixedRateFrom: number;
    fixedRateTo: number;
    hourlyRateFrom: number;
    hourlyRateTo: number;
  latitude: number;
  longitude: number;
  city: string;
  province: string;
  country: string;
    keywords: string[];
    pictures: string[];
    videos: string[];
    documents: string[];
    isPublic: boolean;
}

export interface SONeedUpdateNeed extends SONeedCreateNeed {
    id: number;
}

export interface SOOfferCreateOffer {
    title: string;
    summary: string;
    categoryid: number;
    isExchange: boolean;
    isDonation: boolean;
    isInternship: boolean;
    isPartnership: boolean;
    commissionFrom: number;
    commissionTo: number;
    fixedRateFrom: number;
    fixedRateTo: number;
    hourlyRateFrom: number;
    hourlyRateTo: number;
    latitude: number;
    longitude: number;
    city: string;
    province: string;
    country: string;
    keywords: string[];
    pictures: string[];
    videos: string[];
    documents: string[];

    isAllianceOpen: boolean;
    isAllianceBlackBox: boolean;
    isAllianceMemberTotalVisible: boolean;
    allianceMembers: boolean;
}

export interface SOOfferUpdateOffer extends SOOfferCreateOffer {
    id: number;
    ownerid: number;
    isAvailable: boolean;
}


