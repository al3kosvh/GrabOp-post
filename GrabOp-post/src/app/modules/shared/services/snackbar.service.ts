
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class SnackBarService {

  private subj_notification: Subject<Models.Notification> = new Subject();

  constructor(
    private matSnackBar: MatSnackBar
  ) {
    this.subj_notification.subscribe(notification => {
      matSnackBar.open(notification.message, notification.action, { duration: notification.duration ? notification.duration : 3000 });
    });
  }

  showMessage(notification: Models.Notification) {
    this.subj_notification.next(notification);
  }

}
