/// <reference path="types.d.ts" />

class Human {
  name: string;
  age: TAge;
  attributes: IAttributes;

  constructor({ name, attributes }: IHumanContructor) {
    this.name = name;
    this.age = 15;
    this.attributes = attributes;
  }
}

const human = new Human({
  name: "Alireza",
  attributes: {
    social: 0.5,
    intelligence: 0.8,
    expertise: 0.9,
    happiness: 0.5,
    appearance: 0.6,
    selfLove: 0.7,
    fitness: 0.6,
    health: 0.8,
  },
});
