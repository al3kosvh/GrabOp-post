
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ToolbarService {
    
    private visible = new Subject<boolean>()

    constructor() {
        this.visible.next(true)
    }

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
