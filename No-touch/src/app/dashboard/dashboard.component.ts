import {Component, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest, HttpResponse} from "@angular/common/http";
import {configUrl} from "../config/config";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  dataFromServer: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    //const token = localStorage.getItem('token');
    const token = 'hi'
    if (token) {
      // Configura los encabezados
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });

      // Construye la solicitud personalizada
      const request = new HttpRequest('GET', 'http://192.168.2.104:5050/devices', {
        headers: headers,
        responseType: 'json' // Puedes ajustar esto según el tipo de respuesta esperado
      });

      // Envía la solicitud personalizada
      this.http.request(request).subscribe((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          this.dataFromServer = event.body;
        }
      });
    } else {
      console.error('Token no encontrado en el localStorage.');
    }
  }
}
