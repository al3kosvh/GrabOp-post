
export interface SOServiceReq {
    title: string;
    summary: string;
    categoryId: number;
    isExchange: boolean;
    isDonation: boolean;
    isInternship: boolean;
    isPartnership: boolean;
    isMoney: boolean;
    commissionFrom?: number;
    commissionTo?: number;
    fixedRateFrom?: number;
    fixedRateTo?: number;
    hourlyRateFrom?: number;
    hourlyRateTo?: number;
    latitude?: number;
    longitude?: number;
    city: string;
    province: string;
    country: string;
    keywords?: string[];
    pictures?: string[];
    videos?: string[];
    documents?: string[];
    attachments?: SOAttachment[];
}

export interface CreateNeed extends SOServiceReq {
    isPublic: boolean;
}

export interface UpdateNeed extends SOServiceReq {
    id: number;
    isPublic: boolean;
}

export interface CreateOffer extends SOServiceReq {
    isAllianceOpen?: boolean;
    isAllianceBlackBox?: boolean;
    isAllianceMemberTotalVisible?: boolean;
    allianceMembers?: boolean;
}

export interface UpdateOffer extends SOServiceReq {
    id: number;
    ownerId: number;
    isAvailable: boolean;
}

export interface SOAttachment {
    id: number;
    name: string;
    type: string;
    prefix: string;
    isDefault: boolean;
}

export interface SOUpdateProfileReq {
    id?: number;
    email: string;
    post: string;
    phone: string;
    city: string;
    province: string;
    country: string;
    latitude?: number;
    longitude?: number;
    profilePic: string;
    backgroundPic: string;
    video: string;
    resume: string;
    skillset?: string[];
    interests?: string[];
    type: string;
    firstName?: string;
    lastName?: string;
    occupation?: number;
    jobTitle?: string;
    company?: string;
    name?: string;
    url?: string;
    description?: string;
}

// ----------- response objects -----------

export interface SOEmailExistenceQuery {
    email: string;
    exists: string;
}

export interface SOConnectionGetProfileConnectionsCount {
    id: number;
}

export interface SOProfileConnectionsCount {
    SOcount: number;
}

export interface SOExpandedConnection {
    displayName: string;
    email: string;
    firstName: string;
    fullName: string;
    id: number;
    connectionId: number;
    trusted: boolean;
    connectionStatus: number;
    connectionStatusDate: any;
    // connection_status_date : SOdate_time; // ??????
}

export interface SOconversation_query_result {
    conversationId: number;
    creatorId: number;
    messageId: number;
    subject: string;
    body: string;
    sentDate: any;
    // sent_date : Date; // ?????
    senderId: number;
}

export interface SOConversationMembersQueryResult {
    conversationId: number;
}

export interface SOAccountGetMyConversationsRepons {
    convesation: SOConversation;
    conversationMembers: SOAccount[];
    lastMessage: SOMessage;
    lastMessageSenderId: number;
}

export interface SOBusinessInstance {
    valueBit: boolean;
    valueFrom: number;
    valueTo: number;
    businessTypeId: number;
}

export interface SOService {
    id: number;
    type: string;
    title: string;
    summary?: string;
    // created_date: any;
    createdDate?: Date; // ??????
    creatorId?: number; // is it owner_id ???
    categoryId: number;
    status?: number;
    latitude?: number;
    longitude?: number;
    city: string;
    province: string;
    country: string;
    isAvailable: boolean;
    ownerId: number;
    isPublic: boolean; // is it isAvailable ???
    visitCount?: number;
}

export interface SOServiceExpanded extends SOService {
    portafolio?: string;
    alliance?: Models.AllianceExtended;
    keywords?: string[];
    isExchange: boolean;
    isDonation: boolean;
    isInternship: boolean;
    isPartnership: boolean;
    commissionFrom?: number;
    commissionTo?: number;
    fixedRateFrom?: number;
    fixedRateTo?: number;
    hourlyRateFrom?: number;
    hourlyRateTo?: number;
    // attachments: any;
    attachments?: SOServiceAttachment[]; // ??????
}

export interface SOAccount extends SOUserAuth {
    primaryEmailConfirmed: boolean;
    emailConfirmed: boolean;
    loginCount: number;
    emailVerificationToken: string;
    modifiedDate: any;
    // modified_date: Date; // ?????????
    status: number;
    post: string;
}

export interface SOvAccount {
    id: number;
    type: string; // role
    userName: string;
    primaryEmail: string;
    displayName: string;
    phoneNumber: string;
    profilePic: string;
    jobTitle: string;
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
}

export interface SOAccountExpanded extends SOvAccount {
    backgroundPic: string;
    bideo: string; // bideo ?????  video
    resume: string;
    province: string;
    city: string;
    country: string;
    latitude: number;
    longitude: number;
    skillset: string[];
    interests: string[];
}

export interface SOAllianceMember extends SOvAccount {
    allianceId?: number;
    membershipStatus: string;
    hasTasks: boolean;
}

export interface SOSetting {
    settingid: number;
    name: string;
    value: string;
    description: string;
    fieldtype: string;
}

export interface SOMessage {
    id: number;
    senderid: number;
    subject: string;
    body: string;
    sentDate: any;
    // sentDate: Date; // ??????
}

export interface SOUserAuth {
    address: string;
    address2: string;
    date: any;
    // date: birth_date; // ???????
    birthDateRaw: string;
    city: string;
    company: string;
    country: string;
    createdDate: any;
    // created_date: date_time; // ???????
    culture: string;
    digestHa1Hash: string;
    displayName: string;
    email: string;
    firstName: string;
    fullName: string;
    gender: string;
    id: number;
    invalidLoginAttempts: number;
    language: string;
    lastLoginAttempt?: any;
    // last_login_attempt?: date; // ???????
    lastName: string;
    lockedDate?: any;
    // locked_date?: date; // ???????
    mailAddress: string;
    meta: any;
    modifiedDate: any;
    // modified_date: date_time;  // ???????
    nickname: string;
    passwordHash: string;
    permissions: string[];
    phoneNumber: string;
    postalCode: string;
    primaryEmail: string;
    recoveryToken: string;
    refId?: number;
    refIdStr: string;
    roles: string[];
    salt: string;
    state: string;
    timeZone: string;
    userName: string;
}

export interface SOAlliance {
    id: number;
    isBlackBox: boolean;
    isOpen: boolean;
    isMemberTotalVisible: boolean;
    isActive: boolean;
    // created_date: any;
    createdDate: Date; // ???????
    offerId: number;
    // members : any;
    members: SOAllianceMember[];
    allianceMembersCount: number;
}

export interface SOTrustedConnection {
    connectionId: number;
}

export interface SOUser {
    id: number;
    userName: string;
    primaryEmail: string;
    displayName: string;
    phoneNumber: string;
    profilePic: string;
    jobTitle: string;
    company: string;
    firstName: string;
    lastName: string;
    occupation: number;
    offers: number;
    needs: number;
    numberOfOpps: number;
    distance: number;
}

export interface SOCompany {
    id: number;
    userName: string;
    primaryEmail: string;
    displayName: string;
    phoneNumber: string;
    profilePic: string;
    url: string;
    description: string;
    offers: number;
    needs: number;
    numberOfOpps: number;
    distance: number;
}

export interface SOMessage {
    id: number;
    senderId: number;
    subject: string;
    body: string;
    sentDate: any;
    // sent_date: date; // ???????
}

export interface SOLocation {
    id: number;
    // id: number { set; get; }  // ???????
    longitude?: number;
    latitude?: number;
    city: string;
    province: string;
    country: string;
}

export interface SOConversation {
    id: number;
    createdDate: any;
    // created_date: date; // ???????
    creatorId: number;
}

export interface SOConnection {
    id: number;
    sender: number;
    receiver: number;
    status: number;
    statusDate: any;
    // status_date: date;// ???????
}

export interface SOBusinessTypeInstance {
    id: number;
    valuebit: boolean;
    valueFrom: number;
    valueTo: number;
    businessTypeId: number;
    serviceId: number;
    name: string;
}

export interface SOServiceAttachment {
    parentId: number;
    id: number;
    name: string;
    type: string;
    prefix: string;
    isDefault: boolean;
}

// export interface SOattachment {
//   id: number;
//   name: string;
//   type: string;
//   prefix: string;
//   is_default: boolean;
// }
//
// export interface SOattachment_service {
// // export interface SOattachment_service extends attachment{ // ???????
//   parentid: number;
// }

export interface SOEntityAttachment {
    name: string;
    type: string;
}
