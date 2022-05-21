import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from '../service/data-storage.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoading:Boolean = false;

  constructor(
    private storageService:DataStorageService,
    private router:Router) { }

 

  ngOnInit(): void {
    
  }


  onSubmit(form){
    console.log(form);
    this.storageService.storeProjectDetails(form.value);
    this.router.navigate(['/checklist']);
  };
}
