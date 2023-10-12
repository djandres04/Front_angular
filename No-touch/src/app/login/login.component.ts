import { Component } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {configUrl} from "../config/config";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{


  formLogin:FormGroup=new FormGroup({});



  ngOnInit():void{
    this.formLogin = this.fb.group(
      {
        valueUsername: ['',Validators.required],
        valuePassword: ['', Validators.required],
      });
  };

  constructor(
    private router:Router,
    private fb:FormBuilder,
    private http:HttpClient
  ) {
  };


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  loginPost(){


    if (this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      for (const key in this.formLogin.controls){
        this.formLogin.controls[key].markAsDirty()

      }
      return;
    };
    console.log(this.formLogin.value);
    const {valueUsername, valuePassword} = this.formLogin.value;

    const body = {"username":valueUsername,"password":valuePassword};

    this.http.post(configUrl.login, body, this.httpOptions).subscribe({
      next:(response:any) =>{
        if (response && response.access_token){
         localStorage.setItem('token',response.access_token)
          console.log(response.access_token)
          this.router.navigate(['register']); // Reemplaza 'otro-componente' con la ruta real
        } else {
          console.log("invalid data")
        }
      }
    });
  }
}
