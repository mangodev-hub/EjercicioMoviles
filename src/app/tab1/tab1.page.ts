import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { DatosService } from '../../services/datos';

@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [
    FormsModule,
    IonButton,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonTitle,
    IonToolbar,
  ],
})
export class Tab1Page {
  private readonly datosService = inject(DatosService);

  readonly contador = this.datosService.contador;
  readonly nombreGuardado = this.datosService.nombre;
  readonly enviado = this.datosService.enviado;

  nombre = '';
  direccion = '';

  incrementar(): void {
    this.datosService.incrementar();
  }

  disminuir(): void {
    this.datosService.disminuir();
  }

  reiniciar(): void {
    this.datosService.reiniciar();
  }

  enviar(): void {
    this.datosService.guardar(this.nombre, this.contador(), this.direccion);
  }
}
