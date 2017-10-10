declare module Models {

    interface VORegisterParameters {
        username: string
        firstName: string
        lastName: string
        displayName: string
        email: string
        password: string
        autoLogin?: boolean
        continue?: string
    }

    interface SORegisterParameters {
        UserName: string
        FirstName: string
        LastName: string
        DisplayName: string
        Email: string
        Password: string
        AutoLogin?: boolean
        Continue: string
    }

    interface RegisterResponse {
        UserId: string
        SessionId: string
        UserName: string
        ReferrerUrl: string
        ResponseStatus: Models.SOResponseStatus
        Meta: any
    }
}