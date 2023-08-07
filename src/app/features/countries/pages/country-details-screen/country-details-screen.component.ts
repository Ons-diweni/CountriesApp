import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country/country.service';

@Component({
  selector: 'app-country-details-screen',
  templateUrl: './country-details-screen.component.html',
  styleUrls: ['./country-details-screen.component.css']
})
export class CountryDetailsScreenComponent implements OnInit {

  constructor(private route:ActivatedRoute , private countryService:CountryService) { }
  title = '';
  buttonTopRight= 'Gestion des pays';
  id!:number;
  country : Country | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.getCountry();
  }

  getCountry() {
    this.countryService.findById(this.id).subscribe({
      next: (data) => {
        this.country = data;
        this.title=data.nom;
      },
      error: console.log,
    });
  }

}
