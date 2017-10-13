declare module Models {

    enum UserRole {
        ADMIN, USER
    }

    interface SOUser {
        id: number;
        first_name: string;
        last_name: string;
        display_name: string;
        primary_email: string;
        user_name: string;
        type: string;
        phone_number: string;
        profile_pic: string;
        background_pic: string;
        jobtitle: string;
        company: string;
        description: string;
        distance: number;
        number_of_opps: number;
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
