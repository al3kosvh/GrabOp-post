declare module Models {

    interface Setting {
        settingId: number;
        description: string;
        name: string;
        fieldType: string;
        value: string;
    }

    interface ChangeUserPassword  {        
        oldPassword: string;
        newPassword: string;
        confirmedPassword: string;
    }
}
