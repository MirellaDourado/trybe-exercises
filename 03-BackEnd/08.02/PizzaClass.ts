// Exercício 3

type Slices = 4 | 6 | 8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

class Pizza  {
  flavor;
  slices;

  constructor(flavor: string, slices: Slices) {
    this.flavor = flavor;
    this.slices = slices;
  }
}

const pizzaCalabresa = new Pizza('Calabresa', 8);
const pizzaMarguerita = new Pizza('Marguerita', 6);
const pizzaNutella = new Pizza('Nutella', 4);

//Exercício 4

type Common = "Calabresa" | "Frango" | "Pepperoni";
type Vegetarian = "Marguerita" | "Palmito" | "Cogumelos";
type Sweet = "Nutella" | "Goiabada com Queijo" | "Marshmallow";

interface CommonPizza extends Pizza {
  flavor: Common;
};

interface VegetarianPizza extends Pizza {
  flavor: Vegetarian;
};

interface SweetPizza extends Pizza {
  flavor: Sweet;
};

const NutellaPizza: SweetPizza = {
  flavor: "Nutella",
  slices: 4,
};

const PalmitoPizza: VegetarianPizza = {
  flavor: "Palmito",
  slices: 6,
};

const MargueritaPizza: VegetarianPizza = {
  flavor: 'Marguerita',
  slices: 8,
};
