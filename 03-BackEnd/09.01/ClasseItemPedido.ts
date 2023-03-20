export default class ItemPedido {
  private _nomePedido: string;
  private _preco: number;

  constructor(nomePedido: string, preco:number ) {
    this._nomePedido = nomePedido;
    this._preco = preco;
  }

  get nomePedido() {
    return this._nomePedido;
  }
  
  public set nomePedido(valor : string) {
    this._nomePedido = valor;
  }

  get preco() {
    return this._preco;
  }
  
  public set preco(valor : number) {
    this._preco = valor;
  }
  
}