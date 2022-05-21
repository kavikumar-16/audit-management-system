import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoginMode = true;
  isLoading = false;
  invalidLogin = true;
  error: string = null;
  username:string = null;
  password:string = null;
  constructor(private authenticationService: AuthenticationService, private router:Router ) { }


  

  ngOnInit(): void {
  }

  onSwitchMode(){};
  onSubmit(form: NgForm){
    this.username=form.form.value.username;
    this.password= form.form.value.password;
    this.authenticationService.executeAuthenticationService(this.username, this.password)
    .subscribe(
      data=>{
        
          console.log(data)
          this.router.navigate(['home'])
          this.invalidLogin = false      
        },
        error => {
          console.log(error)
          this.invalidLogin = true
          this.error="Invalid credintials. Please try again."
        }
     
    );
    //console.log(form.form.value.username);
  };

 

}
