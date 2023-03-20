class Student {
  private _nome: string;
  private _subject:string;
  private _matricula: string;
  private _notasProvas: number[];
  private _notasTrabalhos: number[];

  constructor(nome:string, subject:string, matricula:string) {
    this._nome = nome;
    this._subject = subject;
    this._matricula = matricula;
    this._notasProvas = [];
    this._notasTrabalhos = [];
  }

  public get subject(): string {
    return this._subject
  }
  
  public get matricula(): string {
    return this._matricula;
  }

  public set notasProvas(notasProvas: number[]) {
    if(notasProvas.length > 4) {
      throw new Error('A pessoa estudante só deve possuir até 4 notas de provas');
    }
    
    this._notasProvas = notasProvas;
  }

  public get notasProvas():number[] {
    return this._notasProvas;
  }

  public set notasTrabalhos(notasTrabalhos) {
    if(notasTrabalhos.length > 2) {
      throw new Error('A pessoa estudante só deve possuir até 2 notas de trabalhos');
    }

    this._notasTrabalhos = notasTrabalhos;
  }

  public get notasTrabalhos():number[] {
    return this._notasTrabalhos;
  }

  public somaNotas(): number {
    return [...this._notasProvas, ...this._notasTrabalhos]
      .reduce((notaAnterior, nota) => {
        const total = nota + notaAnterior;

        return total;
      }, 0);
  }

  public mediaNotas(): number {
    const media = this.somaNotas() / (this._notasProvas.length + this._notasTrabalhos.length)
    
    return media;
  }

}