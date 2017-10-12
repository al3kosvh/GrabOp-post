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
        user_id: number;
        session_id: string;
        user_name: string;
        display_name: string;
        bearer_token: string;
        response_status: SOResponseStatus;
    }
}
