
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Injectable()
export class ToolbarService {
    
    private visible: BehaviorSubject<boolean> = new BehaviorSubject(true);

    constructor() { }

    isVisible(): Observable<boolean> {
        return this.visible.asObservable();
    }

    showToolbar() {
        this.visible.next(true);
    }

    hideToolbar() {
        this.visible.next(false);
    }
}
