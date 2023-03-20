class Data {
  private _dia:number;
  private _mes:number;
  private _ano:number;

  constructor( dia: number, mes: number, ano: number) {
    if (new Date(`${ano}-${mes}-${dia}`).getDate() !== dia) {
      this._dia = 1;
      this._mes = 1;
      this._ano = 1900;
    } else {
      this._dia = dia;
      this._mes = mes;
      this._ano = ano;
    }
  }

  get dia () {
    return this._dia;
  }

  get mes () {
    return this._mes;
  }

  get ano () {
    return this._ano;
  }

  getMonthName() :string{
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
    'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro',
    'Outubro', 'Novembro', 'Dezembro',]
    return meses[this._mes - 1];
  }

  isLeapYear() :boolean {
    return this._ano % 4 === 0;
  }

  compare(date: Data): number {
    const currentDateStr = `${this._ano}-${this._mes}-${this._dia}`;

    const dateStr = `${date.ano}-${date.mes}-${date.dia}`;

    if (new Date(currentDateStr) > new Date(dateStr)) return 1;
    if (new Date(currentDateStr) < new Date(dateStr)) return -1;

    return 0;
  }
}