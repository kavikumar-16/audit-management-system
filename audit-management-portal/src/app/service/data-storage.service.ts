import { Injectable } from '@angular/core';
import { AuditRequest } from '../model/audit-request.model';

export const PROJECTDETAILS_KEY = 'project-details'
export const QUESTIONS_RESPONSE = 'questions-response'
export const AUDIT_REQUEST = 'audit-request'
@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor() { }


  storeProjectDetails(projectDetails:any){
    console.log(projectDetails)
    window.sessionStorage.removeItem(PROJECTDETAILS_KEY);
    window.sessionStorage.setItem(PROJECTDETAILS_KEY, JSON.stringify(projectDetails));
  }

  getProjectDetails(){
   
    const projectDetails = window.sessionStorage.getItem(PROJECTDETAILS_KEY);
    if (projectDetails) {
      return JSON.parse(projectDetails);
    }
    return {};
  }

  storeQuestionsResponse(noNos:number){
    window.sessionStorage.setItem(QUESTIONS_RESPONSE, JSON.stringify(noNos));
  }

  getQuestionsResponse():number{
    const questionsResponse=window.sessionStorage.getItem(QUESTIONS_RESPONSE);
    if(questionsResponse){
      return JSON.parse(questionsResponse);
    }
    return null
  }
  storeAuditRequest(auditRequest:AuditRequest){
    window.sessionStorage.setItem(AUDIT_REQUEST, JSON.stringify(auditRequest));
  }

  getAuditRequest():AuditRequest{
    const auditRequest=window.sessionStorage.getItem(AUDIT_REQUEST);
    if(auditRequest){
      return JSON.parse(auditRequest);
    }
    return null;
  
  }
}
