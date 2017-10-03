declare module Models {
    export interface ProfileLocation {
        id: number,
        longitude: number,
        latitude: number,
        city: string,
        province: string,
        country: string,
        type: number
    }
}
