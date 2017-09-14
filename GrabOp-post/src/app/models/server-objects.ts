// =========== SOS_2  ===========

// ----------- request objects -----------

export interface SOservice_req {
  title: string;
  summary: string;
  categoryid: number;
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
  attachments?: SOattachment[];
}

export interface Need_CreateNeed extends SOservice_req{
  isPublic:	boolean;
}

export interface Need_UpdateNeed extends SOservice_req{
  id: number;
  isPublic:	boolean;
}

export interface Offer_CreateOffer extends SOservice_req{
  isAllianceOpen?: boolean;
  isAllianceBlackBox?: boolean;
  isAllianceMemberTotalVisible?: boolean;
  allianceMembers?:	boolean;
}

export interface Offer_UpdateOffer extends SOservice_req{
  id: number;
  ownerid: number;
  isAvailable: boolean;
}

export interface SOattachment {
  Id: number;
  Name: string;
  Type : string;
  Prefix: string;
  IsDefault: boolean;
}

export interface SOupdate_profile_req {
  id?:	number;
  email:	string;
  post:	string;
  phone:	string;
  city:	string;
  province:	string;
  country:	string;
  latitude?:	number;
  longitude?:	number;
  profile_pic:	string;
  background_pic:	string;
  video:	string;
  resume:	string;
  skillset?:	string[];
  interests?:	string[];
  type:	string;
  firstname?:	string;
  lastname?:	string;
  occupation?:	number;
  jobtitle?:	string;
  company?:	string;
  name?:	string;
  url?:	string;
  description?:	string;
}

// ----------- response objects -----------

export interface SOemail_existence_query {
  email : string;
  exists : string;
}

export interface SOconnection_get_profile_connections_count {
  id : number;
}

export interface SOprofile_connections_count {
  SOcount : number;
}

export interface SOexpanded_connection {
  display_name : string;
  email : string;
  first_name : string;
  full_name : string;
  id : number;
  connection_id : number;
  trusted : boolean;
  connection_status : number;
  connection_status_date : any;
  // connection_status_date : SOdate_time; // ??????
}

export interface SOconversation_query_result {
  conversationid : number;
  creatorid : number;
  messageid : number;
  subject : string;
  body : string;
  sent_date : any;
  // sent_date : Date; // ?????
  senderid : number;
}

export interface SOconversation_members_query_result {
  conversationid : number;
}

export interface SOaccount_get_my_conversations_repons {
  convesation : SOconversation;
  conversation_members : SOaccount[];
  lastmessage : SOmessage;
  last_message_sender_id : number;
}

export interface SObusiness_instance {
  valuebit : boolean;
  valuefrom : number;
  valueto : number;
  business_typeid : number;
}

export interface SOservice {
  id: number;
  type: string;
  title: string;
  summary?: string;
  // created_date: any;
  created_date?: Date; // ??????
  creatorid?: number; // is it owner_id ???
  category_id: number;
  status?: number;
  latitude?: number;
  longitude?: number;
  city: string;
  province: string;
  country: string;
  is_available: boolean;
  owner_id: number;
  ispublic: boolean; // is it isAvailable ???
  visit_count?: number;
}

export interface SOservice_expanded extends SOservice {
  portafolio?: string;
  alliance?: SOalliance;
  keywords?: string[];
  is_exchange: boolean;
  is_donation: boolean;
  is_internship: boolean;
  is_partnership: boolean;
  commission_from?: number;
  commission_to?: number;
  fixed_rate_from?: number;
  fixed_rate_to?: number;
  hourly_rate_from?: number;
  hourly_rate_to?: number;
  // attachments: any;
  attachments?: SOservice_attachment[]; // ??????
}

export interface SOaccount extends SOuser_auth {
  primary_email_confirmed: boolean;
  email_confirmed: boolean;
  login_count: number;
  email_verification_token: string;
  modified_date: any;
  // modified_date: Date; // ?????????
  status: number;
  post: string;
}

export interface SOv_account {
  id: number;
  type: string; // role
  user_name: string;
  primary_email: string;
  display_name: string;
  phone_number: string;
  profile_pic: string;
  jobtitle: string;
  company: string;
  first_name: string;
  last_name: string;
  occupation?: number;
  url: string;
  description: string;
  offers: number;
  needs: number;
  number_of_opps?: number;
  distance?: number;
}

export interface SOaccount_expanded extends SOv_account {
  background_pic: string;
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

export interface SOalliance_member extends SOv_account {
  allianceid?: number;
  membership_status: string;
  has_tasks: boolean;
}

export interface SOsetting {
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

export interface SOuser_auth {
  address: string;
  address2: string;
  date: any;
  // date: birth_date; // ???????
  birth_date_raw: string;
  city: string;
  company: string;
  country: string;
  created_date: any;
  // created_date: date_time; // ???????
  culture: string;
  digest_ha1_hash: string;
  display_name: string;
  email: string;
  first_name: string;
  full_name: string;
  gender: string;
  id: number;
  invalid_login_attempts: number;
  language: string;
  last_login_attempt?: any;
  // last_login_attempt?: date; // ???????
  last_name: string;
  locked_date?: any;
  // locked_date?: date; // ???????
  mail_address: string;
  meta: any;
  modified_date: any;
  // modified_date: date_time;  // ???????
  nickname: string;
  password_hash: string;
  permissions:string[];
  phone_number: string;
  postal_code: string;
  primary_email: string;
  recovery_token: string;
  ref_id?: number;
  ref_id_str: string;
  roles:string[];
  salt: string;
  state: string;
  time_zone: string;
  user_name: string;
}

export interface SOalliance {
  id: number;
  is_black_box: boolean;
  is_open: boolean;
  is_member_total_visible: boolean;
  is_active: boolean;
  // created_date: any;
  created_date: Date; // ???????
  offerid: number;
  // members : any;
  members : SOalliance_member[];
  alliance_members_count: number;
}

export interface SOtrusted_connection {
  connection_id: number ;
}

export interface SOuser {
  id: number;
  user_name: string;
  primary_email: string;
  display_name: string;
  phone_number: string;
  profile_pic: string;
  jobtitle: string;
  company: string;
  first_name: string;
  last_name: string;
  occupation: number;
  offers: number;
  needs: number;
  number_of_opps: number;
  distance: number;
}

export interface SOcompany {
  id: number;
  user_name: string;
  primary_email: string;
  display_name: string;
  phone_number: string;
  profile_pic: string;
  url: string;
  description: string;
  offers: number;
  needs: number;
  number_of_opps: number;
  distance: number;
}

export interface SOmessage {
  id: number;
  senderid: number;
  subject: string;
  body: string;
  sent_date: any;
  // sent_date: date; // ???????
}

export interface SOlocation {
  id: number;
  // id: number { set; get; }  // ???????
  longitude?: number;
  latitude?: number;
  city: string;
  province: string;
  country: string;
}

export interface SOconversation {
  id: number ;
  created_date: any;
  // created_date: date; // ???????
  creatorid: number ;
}

export interface SOconnection {
  id: number;
  sender: number;
  receiver: number;
  status: number;
  status_date: any;
  // status_date: date;// ???????
}

export interface SObusiness_type_instance {
  id: number;
  valuebit: boolean;
  valuefrom: number;
  valueto: number;
  business_typeid: number;
  serviceid: number;
  name: string;
}

export interface SOservice_attachment {
  parentid: number;
  id: number;
  name: string;
  type : string;
  prefix: string;
  is_default: boolean;
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

export interface SOentity_attachment {
  name: string;
  type: string;
}