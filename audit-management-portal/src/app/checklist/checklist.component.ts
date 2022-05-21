import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuditDetail } from '../model/audit-detail.model';
import { ChecklistService } from '../service/checklist.service';
import { DataStorageService } from '../service/data-storage.service';


@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})
export class ChecklistComponent implements OnInit {

 
  questions:any;
  isLoading:boolean = false;

  constructor(
    private checklistServie:ChecklistService,
    private storageService:DataStorageService,
    private http:HttpClient, private router:Router) {
   }
    
  ngOnInit(): void {

    this.isLoading = true
  
      this.checklistServie.fetchChecklist().subscribe(
        questions=>{
          //console.log(questions);
          this.questions = questions;
          this.isLoading = false;
        },
        error=>{
          console.log('projectAuditService - error');
          this.router.navigate(['/forbidden']);
        }
      );
  }

  onSubmit(form:NgForm){
    console.log(form.value);

    let noCount = 0
    for (const [key, value] of Object.entries(form.value)) {
      console.log(key, value);
      if(value==="No"){
        noCount++;
      }
    }
    this.storageService.storeQuestionsResponse(noCount);
    this.router.navigate(['/status']);
  
  }

  goBack(){
    this.router.navigate(['/home']);
  }
}
