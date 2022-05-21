import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuditDetail } from '../model/audit-detail.model';
import { AuditRequest } from '../model/audit-request.model';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  auditRequest:AuditRequest;

  constructor(private http:HttpClient,private storageService:DataStorageService) { }


  fetchStatus(){ 
    const projectDetails = this.storageService.getProjectDetails();
    const questionsResponse = this.storageService.getQuestionsResponse();
    const auditRequest = new AuditRequest(projectDetails.projectName, projectDetails.managerName, projectDetails.ownerName, new AuditDetail(projectDetails.auditType, new Date(),questionsResponse ))

    this.storageService.storeAuditRequest(auditRequest);
    return this.http.post(
      `http://localhost:8080/ProjectExecutionStatus`
      , auditRequest);
  }
}
