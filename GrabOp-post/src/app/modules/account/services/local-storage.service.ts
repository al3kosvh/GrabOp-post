import { Injectable } from '@angular/core'

@Injectable()
export class LocalStorageService {
    setItem(key: string, item: any) {
        localStorage.setItem(key, btoa(JSON.stringify(item)));
    }

    getItem(key: string): string {
        let value = localStorage.getItem(key);
        return atob(value);
    }

    getObject(key: string): any {
        let value = localStorage.getItem(key);
        return JSON.parse(this.getItem(key));
    }

    remove(key:string){
        localStorage.removeItem(key);
    }
}