declare module Models {

    interface Setting {
        settingid: number;
        description: string;
        name: string;
        fieldtype: string;
        value: string;
    }

    interface ChangeUserPassword  {        
        oldpassword: string;
        newpassword: string;
        confirmedpassword: string;
    }
}
