import { Injectable } from '@angular/core'

@Injectable()
export class LocalStorageService {

    constructor() { }

    setItem(key: string, item: any) {
        localStorage.setItem(key, btoa(JSON.stringify(item)));
    }

    getItem(key: string): any {
        let rawValue: string = localStorage.getItem(key);
        return rawValue ? JSON.parse(atob(rawValue)) : undefined;
    }

    remove(key: string) {
        localStorage.removeItem(key);
    }
}