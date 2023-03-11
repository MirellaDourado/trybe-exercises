// Exercício 1

export interface ICar {
  brand: string;
  color: string;
  doors: number;
}

class Car {
  brand;
  color;
  doors;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk () {
    console.log('BIIIIII!')
  }
  

  turnOn () {
    console.log('Carro ligado!');
  }


  turnOff () {
    console.log('Carro desligado...');
  }

  speedUp () {
    console.log('O carro está acelerando');
  }

  speedDown () {
    console.log('O carro está reduzindo a velocidade...');
  }

  stop () {
    console.log('O carro está parando')
  }

  turn (direction: string) {
    console.log(`O carro está virando para a ${direction}`)
  }
}

//Exercício 2

const gol = new Car('Volkswagen', 'prata', 4);

gol.turnOn();
gol.speedUp();
gol.turn('esquerda');
gol.turn('direita');
gol.turn('direita');
gol.speedDown();
gol.honk();
gol.turn('direita');
gol.turn('esquerda');
gol.turn('esquerda');
gol.turnOff();