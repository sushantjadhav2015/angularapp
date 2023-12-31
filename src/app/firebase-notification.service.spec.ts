import { TestBed } from '@angular/core/testing';

import { FirebaseNotificationService } from './firebase-notification.service';

describe('FirebaseNotificationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseNotificationService = TestBed.get(FirebaseNotificationService);
    expect(service).toBeTruthy();
  });
});
