import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, throwError } from 'rxjs';
import { TOKEN } from '../service/authentication.service';
import { AuditDetail } from '../model/audit-detail.model';
import { AuditRequest } from '../model/audit-request.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectAuditService {



  projectName:string =null;
  managerName:string = null;
  ownerName:string = null;
  auditType:string =null;

  private auditRequest = new BehaviorSubject<AuditRequest>(null);
  currentAuditRequest = this.auditRequest.asObservable();
  
  constructor(private http:HttpClient) { }

  updateAuditDetails(projectName:string,managerName:string,ownerName:string,auditType:string, noCount:number ){

    this.auditRequest.next(new AuditRequest(projectName, managerName, ownerName, new AuditDetail(auditType, new Date(),noCount )))

  }
  updateAuditQuestions(auditQuestions:number){
   console.log(this.auditRequest.getValue)
   this.auditRequest.value.auditDetail.auditQuestions=auditQuestions;
  }

  fetchChecklist(){
    
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem(TOKEN)})
    ;

   
    return this.http.post(
         `http://localhost:8081/AuditCheckListQuestions`
         ,this.auditRequest.value===null? null:this.auditRequest.value.auditDetail);
        
        // this.auditRequest.value.auditDetail);
    
  }

  fetchStatus(){
    const headers = new HttpHeaders({
      Authorization: localStorage.getItem(TOKEN)})
    ;
    
    console.log(headers);
    
    return this.http.post(
      `http://localhost:8080/executionStatus`
      , this.auditRequest.value);
  }
}
