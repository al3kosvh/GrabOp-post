
import { Injectable } from '@angular/core';
import { MdSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {

    constructor(
        private mdSnackBar: MdSnackBar
    ) { }

    show(text: string, action: string, duration?: number) {
        let defaultDuration = 3000;
        let config = {
            duration: duration ? duration : defaultDuration
        };
        this.mdSnackBar.open(text, action, config);
    }

    dismiss() {
        if (this.mdSnackBar._openedSnackBarRef)
            this.mdSnackBar._openedSnackBarRef.dismiss();
    }
}
