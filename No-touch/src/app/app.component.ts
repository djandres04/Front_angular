import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private http:HttpClient
  ) {
  }

  title = 'No-touch';

   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  loginPost(){
    const {username, password} = this.formLogin.value;

    const body = {"username":username,"password":password}

    this.http.post('http://xxxxxx', body, this.httpOptions).subscribe({
      next:(response) =>{console.log(response)}
    })
  }

}
