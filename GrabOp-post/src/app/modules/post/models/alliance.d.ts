declare module Models {
    //used to create/update an alliance
    interface Alliance {
        serviceId: number;
        isAllianceOpen: boolean;
        isAllianceBlackBox: boolean;
        isAllianceMemberTotalVisible: boolean;
        allianceMembers: number[];
    }

    //returned by the api
    interface AllianceExtended {
        id: number;
        isBlackBox: boolean;
        isOpen: boolean;
        isMemberTotalVisible: boolean;
        isActive: boolean;
        createdDate: Date;
        offerId: number;
        members: Member[];
        allianceMembersCount: number;
    }

    interface Member {
        allianceId: number;
        membershipStatus: string;
        hasTasks: boolean;
        id: number;
        type: string;
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
        url: string;
        description: string;
        offers: number;
        needs: number;
        numberOfOpps: number;
        distance: number
    }
}