declare module Models {
    interface SOResponseStatus {
        ErrorCode: string;
        Message: string;
        StackTrace: string;
        Errors: SOResponseError[];
    }
    
    interface SOResponseError {
        ErrorCode: string;
        FieldName: string;
        Message: string;
        Meta: any;
    }
}