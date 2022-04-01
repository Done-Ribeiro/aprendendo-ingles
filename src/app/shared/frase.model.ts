export class Frase {
  /**
   * forma menos verbosa
   * elimina a declaração dos atributos ali encima //public fraseEng: string
   * e automaticamente já atribui os valores recebidos no construtor
   */
  constructor(public fraseEng: string, public frasePtBr: string) { }
}
