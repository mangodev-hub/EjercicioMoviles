import { computed, Injectable, signal } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class DatosService{
    readonly nombre = signal('');
    readonly contador = signal(0);
    readonly enviado = signal(false);
    readonly direccion = signal('');
    readonly multiplo2 = computed(() => this.contador() % 2 === 0);

    incrementar(): void {
    this.contador.update((valor) => valor + 1);
    }

    disminuir(): void {
    this.contador.update((valor) => Math.max(0, valor - 1));
    }

    reiniciar(): void {
    this.contador.set(0);
    this.direccion.set('');
    }

    guardar(nombre: string, contador: number, direccion: string): void {
    this.nombre.set(nombre);
    this.contador.set(contador);
    this.direccion.set(direccion);
    this.enviado.set(true);
    }
}
