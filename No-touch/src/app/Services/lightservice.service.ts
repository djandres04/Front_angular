import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LightserviceService {

  constructor(private http: HttpClient) {}

  // Método para realizar una solicitud POST al servidor
  updateStatus(id: number, newData: any) {
    // Realiza la solicitud POST al servidor y envía el ID y otros datos
    return this.http.post('http://192.168.1.104:5050/devices', { id, newData });
  }
}
