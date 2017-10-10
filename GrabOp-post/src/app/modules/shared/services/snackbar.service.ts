
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {

  constructor(
    private matSnackBar: MatSnackBar
  ) { }

  show(text: string, action: string, duration?: number) {
    let defaultDuration = 3000;
    let config = {
      duration: duration ? duration : defaultDuration
    };
    this.matSnackBar.open(text, action, config);
  }

  dismiss() {
    if (this.matSnackBar._openedSnackBarRef)
      this.matSnackBar._openedSnackBarRef.dismiss();
  }
}
