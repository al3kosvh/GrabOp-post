export interface SOget_profile
{
    id: number;
    expanded:boolean;
}


export interface SOget_my_profile
{
}


export interface SOupdate_profile
{
    id: number;
    email: string;
    post: string;
    phone: string;
    city: string;
    province: string;
    country: string;
    latitude?: number;
    longitude?: number;
    profile_pic: string;
    background_pic: string;
    video: string;
    resume: string;
    skillset: string[] ;
    interests: string[];
    type: string;
    firstname: string;
    lastname: string;
    occupation: number;
    jobtitle: string;
    company: string;
    name: string;
    url: string;
    description: string;
}

export interface SOupdate_user_profile
{
    id: number;
    email: string;
    post: string;
    phone: string;
    city: string;
    province: string;
    country: string;
    latitude?: number;
    longitude?: number;
    profile_pic: string;
    background_pic: string;
    video: string;
    resume: string;
    skillset: string[] ;
    interests: string[] ;
    firstname: string;
    lastname: string;
    occupation: number;
    jobtitle: string;
    company: string;
}
export interface SOupdate_company_profile
{
    id: number;
    email: string;
    post: string;
    phone: string;
    city: string;
    province: string;
    country: string;
    latitude?: number;
    longitude?: number;
    profile_pic: string;
    background_pic: string;
    video: string;
    resume: string;
    skillset: string[] ;
    interests: string[] ;
    type: string;
    name: string;
    url: string;
    description: string;
}


export interface SOdeactivate_account
{
    id: number;
}


export interface SOupdate_profile_location
{
}

export interface SOget_profile_location
{
    id: number;
    type: number;
}

export interface SOget_accounts_near_by
{
    id : number;
}

export interface SOget_account_settings
{
    id : number;
}


export interface SOtoogle_account_setting
{
    id : number;
    settingid : number;
    value : string;
}

    export interface SOpassword_forgo
   {
       user_name_or_email : string;
    }

    export interface SOverify_emai
    {
        token : string;
    }


export interface SOreset_passwor
{
    token : string;
    new_password : string;
}


export interface SOchange_user_passwor
{
    id : string;
    oldpassword : string;
    newpassword : string;
    confirmedpassword : string;
}


export interface check_email_existence
{
    email : string;
}

export interface SOemail_existence_quer
{
    email : string;
    exists : string;
}

export enum SOemail_existence
{
    existing,
    non_existing
}

export interface SOalliance_get_alliance
{
    id : number;
}

export interface SOget_my_alliances
{
}


export interface SOalliance_create_alliance
{
    service_id : number;
    is_alliance_open? : boolean;
    is_alliance_black_box? : boolean;
    is_alliance_member_total_visible? : boolean;
    alliance_members : number[];
}


export interface SOalliance_update_alliance
{
    id : number;
    is_alliance_open? : boolean;
    is_alliance_black_box? : boolean;
    is_alliance_member_total_visible? : boolean;
}

export interface SOalliance_terminate_alliance
{
    id : number;
}

export interface SOconnection_get_my_connections
{
    quantity : number;
    last_connection_id : number;
}


export interface SOconnection_get_profile_connections
{

    id : number;
    quantity : number;
    last_connection_id : number;
}


export interface SOconnection_get_profile_connections_count
{
    id : number;
}

export interface SOprofile_connections_coun
{
    SOcount : number;
}

export interface SOexpanded_connection
{
    SOdisplay_name : string;
    SOemail : string;
    SOfirst_name : string;
    SOfull_name : string;
    SOid : number;
    SOconnection_id : number;
    SOtrusted : boolean;
    SOconnection_status : number;
    SOconnection_status_date : string;
}


export interface SOconnection_make_reques
{
    sender : number;
    receiver : number;
    message : string;
}

    export interface SOconnection_request_confirmatio
    {
        connectionid : number;
        confirmer : number;
        accept : boolean;
    }

export interface SOconversation_message_conversation
{
    conversationid : number;
    senderid : number;
    receipts : number[];
    subject : string;
    body : string;
}


export interface SOconversation_reply_conversatio
{
    id : number;
    senderid : number;
    subject : string;
    body : string;
}


export interface SOaccount_get_my_conversations
{
}

export interface SOconversation_query_resul
{
    conversationid : number;
    creatorid : number;
    messageid : number;
    subject : string;
    body : string;
    sent_date : string;
    senderid : number;
}

export interface SOconversation_members_query_result
{
    conversationid : number;
}

export interface SOaccount_get_my_conversations_repons
{
   // convesation : SOconversation;
    //conversation_members : SOaccount[];
   // lastmessage : SOmessage;
    last_message_sender_id : number;
}


export interface SOconversation_delete_conversation
{
    id : number;
}

export interface SOmessage_send_message
{
    senderid : number;
    receipts : number[];
    subject : string;
    body : string;
}

export interface SOmessage_delete_messag
{
    id : number;
}

export interface SOservice_get_service
{
    id : number;
    expanded : boolean;
}


export interface SOaccount_get_services
{
    id : number;
}


export interface SOget_my_services
{
}


export interface SOoffer_update_offe
{

    id : number;
    title : string;
    summary : string;
    categoryid : number;
    is_exchange : boolean;
    is_donation : boolean;
    is_internship : boolean;
    is_partnership : boolean;
    commission_from? : number;
    commission_to? : number;
    fixed_rate_from? : number;
    fixed_rate_to? : number;
    hourly_rate_from? : number;
    hourly_rate_to? : number;
    latitude : number;
    longitude : number;
    city : string;
    province : string;
    country : string;
    keywords : string[];
    pictures : string[];
    videos : string[];
    documents : string[];
    ownerid : number;
    is_available : boolean;
}


export interface SOneed_update_nee
{
    id : number;
    title : string;
    summary : string;
    categoryid : number;
    is_exchange : boolean;
    is_donation : boolean;
    is_internship : boolean;
    is_partnership : boolean;
    commission_from? : number;
    commission_to? : number;
    fixed_rate_from? : number;
    fixed_rate_to? : number;
    hourly_rate_from? : number;
    hourly_rate_to? : number;
    latitude : number;
    longitude : number;
    city : string;
    province : string;
    country : string;
    keywords : string[];
    pictures : string[];
    videos : string[];
    documents : string[];
    is_public : boolean;
}


export interface SOoffer_create_offe
{

    title : string;
    summary : string;
    categoryid : number;
    is_exchange : boolean;
    is_donation : boolean;
    is_internship : boolean;
    is_partnership : boolean;
    commission_from? : number;
    commission_to? : number;
    fixed_rate_from? : number;
    fixed_rate_to? : number;
    hourly_rate_from? : number;
    hourly_rate_to? : number;
    latitude : number;
    longitude : number;
    city : string;
    province : string;
    country : string;
    keywords : string[];
    pictures : string[];
    videos : string[];
    documents : string[];
    is_alliance_open? : boolean;
    is_alliance_black_box? : boolean;
    is_alliance_member_total_visible? : boolean;
    alliance_members : number[];
}



export interface SOneed_create_nee
{
    title : string;
    summary : string;
    categoryid : number;
    is_exchange : boolean;
    is_donation : boolean;
    is_internship : boolean;
    is_partnership : boolean;
    commission_from? : number;
    commission_to? : number;
    fixed_rate_from? : number;
    fixed_rate_to? : number;
    hourly_rate_from? : number;
    hourly_rate_to? : number;
    latitude : number;
    longitude : number;
    city : string;
    province : string;
    country : string;
    keywords : string[];
    pictures : string[];
    videos : string[];
    documents : string[];
    is_public : boolean;
}

export interface SObusiness_instance
{
   valuebit : boolean;
   valuefrom : number;
   valueto : number;
   business_typeid : number;
}

export interface SOdelete_servic
{
    id : number;
}