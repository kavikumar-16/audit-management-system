import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuditRequest } from '../model/audit-request.model';
import { DataStorageService } from '../service/data-storage.service';
import { StatusService } from '../service/status.service';

@Component({
  selector: 'app-audit-status',
  templateUrl: './audit-status.component.html',
  styleUrls: ['./audit-status.component.css']
})
export class AuditStatusComponent implements OnInit {

  projectExecutionStatus:string;
  remedialActionDuration:string;
  auditRequest:AuditRequest;
  isLoading:boolean =true

  constructor(private storageService : DataStorageService, private statusService:StatusService, private router:Router) { }


  ngOnInit(): void {
    this.statusService.fetchStatus().subscribe(
      (data:any) => {
        console.log(data)
       this.projectExecutionStatus=data.projectExecutionStatus;
       this.remedialActionDuration=data.remedialActionDuration;
       this.auditRequest = this.storageService.getAuditRequest();
      },
      error=>{
        console.log('projectAuditService - error');
        this.router.navigate(['/forbidden']);
      }
   )
   this.isLoading=false;
  }

}
