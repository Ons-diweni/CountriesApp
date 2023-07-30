import { Continent } from "../enums/continent.enum";

export interface Country {
    id:string;
    nom: string;
    population: number;
    superficie: number;
    continent: Continent;
    pib: number;
    image: string;
  }