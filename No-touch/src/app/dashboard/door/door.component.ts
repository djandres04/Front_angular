import {Component, Input} from '@angular/core';
import {LightserviceService} from "../../Services/lightservice.service";

@Component({
  selector: 'app-door',
  templateUrl: './door.component.html',
  styleUrls: ['./door.component.scss']
})
export class DoorComponent {
  @Input() doorData: any;

  constructor(
    private lightService:LightserviceService
  ) {
  }
  updateStatus(id: number, newData: any) {
    this.lightService.updateStatus(id, newData).subscribe((response: any) => {
      // Maneja la respuesta del servidor y actualiza el estado (status) del componente hijo
      this.doorData.status = response.newStatus;
    });
  }
}
