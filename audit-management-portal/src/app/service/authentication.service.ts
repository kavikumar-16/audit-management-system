import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { AUTH_API_URL } from '../app.constants';

export const TOKEN = 'token'
export const AUTHENTICATED_USER = 'authenticatedUser'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { 
  }

  
  executeAuthenticationService(username, password) {
    
    console.log("Execute Hello JWT Auth Service")

    return this.http.post<any>(
      `${AUTH_API_URL}/login`,
      {
        userId : username ,
        password : password
      }).pipe(
        map(
          data => {
            console.log(data)
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, data.authToken);
            console.log(data.authToken);
            return data;
          }
        )
      );
    
  }
  isLoggedIn() {
    let token = sessionStorage.getItem(TOKEN);
    if(token==undefined || token===''||token==null) {
      return false;
    }
    else{
      return true;
    }
  }

  getToken(){
    return sessionStorage.getItem(TOKEN);
  }

  logout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
  
}
