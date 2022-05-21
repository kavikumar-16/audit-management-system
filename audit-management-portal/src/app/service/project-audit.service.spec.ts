import { TestBed } from '@angular/core/testing';

import { ProjectAuditService } from './project-audit.service';

describe('ProjectAuditService', () => {
  let service: ProjectAuditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectAuditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
