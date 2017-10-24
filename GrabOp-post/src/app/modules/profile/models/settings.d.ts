declare module Models {

    interface Setting {
        setting_id: number;
        description: string;
        name: string;
        field_type: string;
        value: string;
    }

    interface ChangeUserPassword  {        
        old_password: string;
        new_password: string;
        confirmed_password: string;
    }
}
