import {Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {LightserviceService} from "../../Services/lightservice.service";

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.scss']
})
export class LightComponent {

  @Input() lightData: any;

  constructor(
    private lightService:LightserviceService
  ) {
  }
  updateStatus(id: number, newData: any) {
    this.lightService.updateStatus(id, newData).subscribe((response: any) => {
      // Maneja la respuesta del servidor y actualiza el estado (status) del componente hijo
      this.lightData.status = response.newStatus;
    });
  }
}
