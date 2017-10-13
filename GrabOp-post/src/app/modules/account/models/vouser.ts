
export enum UserRole {
  ADMIN, USER
}


export class SOUser{
  company:string;
  description:string;
  display_name:string;
  distance:string;
  first_name:string;
  id:string;
  jobtitle:string;
  last_name:string;
  needs:number;
  number_of_opps:number;
  occupation:number;
  offers:number;
  phone_number:string;
  primary_email:string;
  profile_pic:string;
  type:string;
  url:string;
  user_name:string;
}



export class VOUser {
  id: number;
  sessionId?:string;
  userId?:any;
  role?: string;
  username: string;
  password?:string;
  primaryEmail: string;
  emailVisible?: boolean;
  displayName: string;
  token?: Models.Token;
  isLogin?: boolean;
  firstName: string;
  lastName: string;

  /*constructor(obj: any) {
    for (let str in obj)this[str] = obj[str];
  }*/

}


export class VOUserExt extends VOUser {
  backgroundImage?: string;
  video?: string;
  resume?: string;
  province?: string;
  city?: string;
  country?: string;
  latitude?: number;
  longitude?: number;
  skillset?: string[];
  interests?: string[];
  profileImage?: string;
  jobtitle?: string;
  company?: string;
  occupation?: number;
  url?: string;
  description?: string;
  phoneNumber?: string;
  phoneVisible?: boolean;
  distance?: number;
  offers?: number;
  needs?: number;
  numberOfOpps?: number;
}

export class SOResponseStatus{
  ErrorCode: string;
  Message: string;
  StackTrace: string;
  Errors: SOResponseError[];
  constructor(obj: any){ for(let str in obj) this[str] = obj[str];}
}

// SOResponseError - made for myself
export class SOResponseError{
  ErrorCode: string;
  FieldName: string;
  Message: string;
  Meta: any;
  constructor(obj: any){ for(let str in obj) this[str] = obj[str];}
}


export class SOAuthenticate{
  UserName: string;
  Password: string;
  provider: string;
  nonce: string;
  UseTokenCookie: boolean;
  constructor(obj: any){ for(let str in obj) this[str] = obj[str];}
}

export class SOAuthenticateResponse{
  user_id: string;
  session_id: string;
  user_name: string;
  display_name: string;
  bearer_token: string;
  response_status: SOResponseStatus;
  constructor(obj: any){ for(let str in obj) this[str] = obj[str];}
}

// server model

// export class SOvAccount {
//   Id: number;
//   type: string;
//   userName: string;
//   PrimaryEmail: string;
//   displayName: string;
//   PhoneNumber: string;
//   profile_pic: string;
//   jobtitle: string;
//   company: string;
//   firstName: string;
//   lastName: string;
//   occupation: number;
//   url: string;
//   description: string;
//   offers: number;
//   needs: number;
//   numberOfOpps: number;
//   distance: number;
//
//   constructor(obj: any){
//     for(let str in obj) this[str] = obj[str];
//
//   }
// }

export class SOvAccount {
  id: number;
  type: string;
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
  url: string;
  description: string;
  offers: number;
  needs: number;
  number_of_opps: number;
  distance: number;

  constructor(obj: any){
    for(let str in obj) this[str] = obj[str];

  }
}


export class SOvAccountExpanded extends SOvAccount{
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

  constructor(obj: any){super(obj); for(let str in obj) this[str] = obj[str];}
}
