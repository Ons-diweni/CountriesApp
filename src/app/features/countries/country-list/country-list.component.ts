import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country/country.service';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  countriesList:Country[] = [];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
   // Appeler la méthode getAll() et s'abonner à l'observable pour récupérer les données
  this.countryService.getAll().subscribe(data => { 
    this.countriesList = data;
    console.log(this.countriesList);
  });
}

}
