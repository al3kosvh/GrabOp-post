
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {

    constructor(
        private matSnackBar: MatSnackBar
    ) { }

    showMessage(message: string, action?: string, duration?: number) {
        this.matSnackBar.open(message, action, {duration: duration ? duration : 3000 });
    }

}
