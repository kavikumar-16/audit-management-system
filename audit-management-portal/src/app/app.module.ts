import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingSpinnerComponent } from './common/loading-spinner/loading-spinner.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AuditStatusComponent } from './audit-status/audit-status.component';
import { HeaderComponent } from './header/header.component';
//import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AuthInterceptorService } from './login/auth-interceptor.service';
import { ForbiddenComponent } from './forbidden/forbidden.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingSpinnerComponent,
    LoginComponent,
    HomeComponent,
    ChecklistComponent,
    AuditStatusComponent,
    HeaderComponent,
    ForbiddenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
