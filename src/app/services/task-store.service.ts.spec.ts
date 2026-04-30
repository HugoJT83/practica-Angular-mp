import { TestBed } from '@angular/core/testing';

import { TaskStoreServiceTs } from './task-store.service.ts';

describe('TaskStoreServiceTs', () => {
  let service: TaskStoreServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStoreServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
