import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase:'
  public resposta: string = ''

  public rodada: number = 0
  public rodadaFrase: Frase = this.frases[0]

  public progresso: number = 0

  public tentativas: number = 3

  constructor() {
    //definição dinamica -> ao atribuir a rodadaFrase, o valor baseado no this.rodada, a frase ficará dinamica (depois)
    this.atualizaRodada()
  }

  ngOnInit(): void {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }

  public verificarResposta(): void {
    console.log(this.tentativas)
    //resposta certa
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta')

      //trocar pergunta da rodada
      this.rodada++

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)//deixa dinamico a %, de acordo com o tamanho do array de frases
      console.log(this.progresso)

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

    } else {
      //diminuir a variável tentativas
      this.tentativas--

      if (this.tentativas === -1) {
        alert('Você perdeu todas as tentativas')
      }
    }
    console.log(this.tentativas)
  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}
