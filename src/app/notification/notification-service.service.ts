import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {
  currentMessage = new BehaviorSubject(null);
  
  constructor(private notificationService: NotificationServiceService) {
  }

}
