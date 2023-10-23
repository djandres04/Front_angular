import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {RegisterComponent} from "./login/register/register.component";
import {LostPasswordComponent} from "./login/lost-password/lost-password.component";
import {TokenInterceptorService} from "./Services/token-interceptor.service";
import {DeleteUserComponent} from "./login/delete-user/delete-user.component";
import {UsersComponent} from "./login/users/users.component";
import { LightComponent } from './dashboard/light/light.component';
import { DoorComponent } from './dashboard/door/door.component';
import { BuzzerComponent } from './dashboard/buzzer/buzzer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    LostPasswordComponent,
    DeleteUserComponent,
    UsersComponent,
    LightComponent,
    DoorComponent,
    BuzzerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
