import { Continent } from "../enums/continent.enum";

export interface Country {
    id:number;
    nom: string;
    population: number;
    superficie: number;
    continent: Continent;
    pib: number;
    image: string;
  }