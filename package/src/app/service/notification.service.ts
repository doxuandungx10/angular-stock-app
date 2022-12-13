import { Injectable } from '@angular/core';
import {NzNotificationService} from 'ng-zorro-antd/notification';


@Injectable()
export class NotificationService {
  constructor(private notification: NzNotificationService
  ) {
  }
  showNotification(type: string, message: string) {
    this.notification.create(
      type,
      message,
      null,
      {
        nzStyle: {
          fontWeight: 'lighter',
          fontSize: 'larger',
          top: '10%'
        },
        nzDuration: 5000,
      }
    );
  }
}
