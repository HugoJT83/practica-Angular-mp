import { Component, computed, effect, signal } from '@angular/core';

@Component({ //standalone -> el componente funciona como un modulo en si mismo
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
  count = signal(0); //se puede indicar cualquier tipo de dato
  doubleCount = computed(() =>this.count() * 2 ) // como se define una variable reactiva


  constructor() {
    effect(()=> { //El efecto se ejecuta cuando la variable se modifique
      console.log('El contador ha cambiado: ', this.count());
    })
  }

  increment() {
    this.count.update((value)=> value + 1); //No se pueden usar operadores estandar en señales > Se usa update con callback
  }

  decrement() {
    this.count.update((value)=> value - 1);
  }

}
