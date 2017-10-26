declare module Models {
    
    interface SOAuthenticateBasic {
        username: string;
        password: string;
        rememberMe: boolean;
    }

    interface SOAuthenticate {
        UserName: string;
        Password: string;
        provider: string;
        nonce: string;
        UseTokenCookie: boolean;
    }

    interface SOAuthenticateResponse {
        userId: number;
        sessionId: string;
        username: string;
        displayName: string;
        bearerToken: string;
        responseStatus: SOResponseStatus;
    }
}
