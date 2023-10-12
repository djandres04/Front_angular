import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LostPasswordComponent} from "./login/lost-password/lost-password.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'forgot-password', component:LostPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
