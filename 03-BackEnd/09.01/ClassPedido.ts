import Cliente from "./ClasseCliente";
import ItemPedido from "./ClasseItemPedido";

export default class Pedido {
  private _cliente: Cliente;
  private _itens: ItemPedido[];
  private _formaPagamento: string;
  private _desconto = 0;

  constructor(cliente: Cliente, itens: ItemPedido[], formaPagamento:string, desconto: number) {
    this._cliente = cliente;
    this._itens = itens;
    this._formaPagamento = formaPagamento;
    this._desconto = desconto;
  }

  get cliente(): Cliente {
    return this._cliente;
  }

  set cliente(valor: Cliente) {
    this._cliente = valor;
  }

  get itens(): ItemPedido[] {
    return this._itens;
  }

  set itens(valor: ItemPedido[]) {
    if (valor.length === 0) {
      throw new Error('O pedido deve ter pelo meno um item.');
    }

    this._itens = valor;
  }

  get formaPagamento(): string {
    return this.formaPagamento;
  }

  set formaPagamento(valor: string) {
    this._formaPagamento = valor;
  }

  get desconto(): number {
    return this._desconto;
  }

  set discount(valor: number) {
    if (valor < 0) {
      throw new Error('O desconto não pode ser negativo.');
    }

    this._desconto = valor;
  }

  calculaTotalPedido() :number {
    return this._itens.reduce((itemAnterior, item) => {
      const total = itemAnterior + item.preco;
      
      return total;
    }, 0);
  }

  CalculaTotalComDesconto() :number {
    return this.calculaTotalPedido() * (1 - this._desconto)
  }
}