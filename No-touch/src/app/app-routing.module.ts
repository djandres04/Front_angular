import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./login/register/register.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {LostPasswordComponent} from "./login/lost-password/lost-password.component";
import {DeleteUserComponent} from "./login/delete-user/delete-user.component";
import {UsersComponent} from "./login/users/users.component";

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'forgot-password', component:LostPasswordComponent},
  {path:'delete-user', component:DeleteUserComponent},
  {path:'users',component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
