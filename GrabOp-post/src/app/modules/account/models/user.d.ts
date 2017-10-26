declare module Models {

    enum UserRole {
        ADMIN, USER
    }

    interface SOUser {
        id: number;
        firstName: string;
        lastName: string;
        displayName: string;
        primaryEmail: string;
        username: string;
        type: string;
        phoneNumber: string;
        profilePic: string;
        backgroundPic: string;
        jobTitle: string;
        company: string;
        description: string;
        distance: number;
        numberOfOpps: number;
        occupation: number;
        needs: number;
        offers: number;
        url: string;
        bideo: string;
        resume: string;
        province: string;
        city: string;
        country: string;
        latitude: number;
        longitude: number;
        skillset: string[];
        interests: string[];
    }

    interface VOUser {
        id?: number;
        sessionId?: string;
        role?: string;
        username: string;
        password?: string;
        primaryEmail: string;
        displayName: string;
        token?: Models.Token;
        isLogin?: boolean;
        firstName: string;
        lastName: string;
    }

    interface VOPerson extends VOUser {

    }

    interface VOUserExt extends VOUser {
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
        distance?: number;
        offers?: number;
        needs?: number;
        numberOfOpps?: number;
        type?: string;
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

    interface SOvAccount {
        id: number;
        type: string;
        userName: string;
        primaryEmail: string;
        displayName: string;
        phoneNumber: string;
        profilePic: string;
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


    interface SOvAccountExpanded extends SOvAccount {
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
}
