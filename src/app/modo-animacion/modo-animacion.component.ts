import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modo-animacion',
  templateUrl: './modo-animacion.component.html',
  styleUrls: ['./modo-animacion.component.css'],
  animations: [
    trigger('animacionCuadro', [
      state('inicio-1', style({
        width: '100px'
      })),
      state('inicio-2', style({
        width: '100px',
      })),
      state('fin', style({
        width: '350px',
      })),
      transition('inicio-1 => fin', [
        animate('1000ms')
      ]),
      // transition('inicio-2 => fin', [
      //   animate('1000ms cubic-bezier(0.68, -0.6, 0.32, 1.6)')
      // ])
      transition('inicio-2 => fin', [
        animate('1000ms', keyframes([
          style({width: '100px', offset: 0}),
          style({width: '127px', offset: 0.12}),
          style({width: '208px', offset: 0.24}),
          style({width: '345px', offset: 0.36}),
          style({width: '287px', offset: 0.54}),
          style({width: '345px', offset: 0.74}),
          style({width: '334px', offset: 0.82}),
          style({width: '348px', offset: 0.92}),
          style({width: '346px', offset: 0.96}),
          style({width: '350px', offset: 1})
        ]))
      ])
    ])
  ]
})

export class ModoAnimacionComponent implements OnInit {

  estadoCuadro = 'inicio-1';
  estadoCuadro2 = 'inicio-2';

  constructor() { }

  ngOnInit(): void {
  }

  animar(): void{
    this.estadoCuadro = this.estadoCuadro === 'inicio-1' ? 'fin' : 'inicio-1';
    this.estadoCuadro2 = this.estadoCuadro2 === 'inicio-2' ? 'fin' : 'inicio-2';
  }
}
