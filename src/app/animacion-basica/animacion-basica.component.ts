import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animacion-basica',
  templateUrl: './animacion-basica.component.html',
  styleUrls: ['./animacion-basica.component.css'],
  animations: [
    trigger('animacionCuadro', [
      state('estado1', style({
        backgroundColor: 'red',
        width: '50px',
        height: '100px'
      })),
      state('estado2', style({
        backgroundColor: 'blue',
        width: '150px',
        height: '150px'
      })),
      // transition('estado1 <=> estado2', animate('0.5s'))
      transition('estado1 => estado2', [
        animate('1000ms 2s', style({backgroundColor: 'blue'})),
        animate('2000ms 1.5s', style({width: '150px'})),
        animate(500, style({height: '150px'}))
      ]),
      transition('estado2 => estado1', [
        animate(1000, style({backgroundColor: 'red'})),
        animate(2000, style({width: '100px'})),
        animate(500, style({height: '100px'}))
      ])
    ])
  ]
})
export class AnimacionBasicaComponent implements OnInit {

  estadoCuadro = 'estado1'

  constructor() { }

  ngOnInit(): void {
  }

  animar(): void{
    this.estadoCuadro = this.estadoCuadro === 'estado1' ? 'estado2' : 'estado1';    
  }
}
