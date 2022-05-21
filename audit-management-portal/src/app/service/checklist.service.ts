import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CHECKLIST_API_URL } from '../app.constants';
import { DataStorageService } from './data-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ChecklistService {

  constructor(private http:HttpClient,private storageService:DataStorageService) { }

  fetchChecklist(){
    
    // const headers = new HttpHeaders({
    //   Authorization: localStorage.getItem(TOKEN)})
    // ;

   
    return this.http.post(
         `${CHECKLIST_API_URL}/AuditCheckListQuestions`
         ,this.storageService.getProjectDetails().auditType);
        
        // this.auditRequest.value.auditDetail);
    
  }

}
