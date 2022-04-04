import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() tentativas?: number

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

  constructor() {
    console.log(this.coracoes)
  }

  //metodo executado durante processo de decoração dos valores, recebidos de componente pai para filho
  //ou seja, no momento de input dos dados...
  //sempre quando existem input de dados, esse metodo é disparado
  //sempre quando os valores recebidos são alterados, esse metodo tambem é executado
  ngOnChanges(): void {
    console.log('tentativas recebidas do painel: ', this.tentativas)
  }

  ngOnInit(): void {
  }

}
