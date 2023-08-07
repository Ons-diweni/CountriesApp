import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
  title = 'Gestion de pays';
  buttonTopRight= 'Exporter en CSV';
  buttonTopLeft='Recherche';
  buttonBottom='Ajouter';
  constructor() { }

  ngOnInit(): void {
  }

}
