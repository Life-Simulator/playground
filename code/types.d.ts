type TAge = number;

interface IAttributes {
  social: number;
  intelligence: number;
  expertise: number;
  happiness: number;
  appearance: number;
  selfLove: number;
  fitness: number;
  health: number;
}

interface IHumanContructor {
  name: string;
  attributes: IAttributes;
}
