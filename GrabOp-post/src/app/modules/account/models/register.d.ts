declare module Models {

    interface VORegisterParameters {
        username: string;
        firstName: string;
        lastName: string;
        displayName: string;
        email: string;
        password: string;
        autoLogin?: boolean;
        continue?: string;
    }

    interface SORegisterParameters {
        userName: string;
        firstName: string;
        lastName: string;
        displayName: string;
        email: string;
        password: string;
        autoLogin?: boolean;
        continue: string;
    }

    interface RegisterResponse {
        userId: number;
        sessionId: string;
        userName: string;
        referrerUrl: string;
        responseStatus: Models.SOResponseStatus;
        meta: any;
    }
}
