import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuditStatusComponent } from './audit-status/audit-status.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path:'', redirectTo:'home',pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent,pathMatch:'full',canActivate:[AuthGuard] },
  { path:'checklist',component: ChecklistComponent,pathMatch:'full',canActivate:[AuthGuard] },
  { path:'status', component: AuditStatusComponent,pathMatch:'full',canActivate:[AuthGuard] },
  { path:'forbidden', component: ForbiddenComponent, pathMatch:'full'},
 {path:'**',component:PageNotFoundComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
