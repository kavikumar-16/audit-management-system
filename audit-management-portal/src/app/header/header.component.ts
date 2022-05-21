import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthenticationService, TOKEN } from '../service/authentication.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    //private dataStorageService: DataStorageService,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    if(localStorage.getItem(TOKEN)){
      this.isAuthenticated =true
    }
    
  }

  // onSaveData() {
  //   this.dataStorageService.storeRecipes();
  // }

  // onFetchData() {
  //   this.dataStorageService.fetchRecipes().subscribe();
  // }

  onLogout() {
    this.authService.logout();
    location.reload();

  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
