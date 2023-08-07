import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Continent } from 'src/app/core/enums/continent.enum';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

 // country: Country | undefined;
/*   id!: number;
 */ 
  @Input() country: Country | undefined;
  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

  ngOnInit(): void {
/*     this.getCountry(); */
  }

/*   getCountry() {
    this.countryService.findById(this.id).subscribe({
      next: (data) => {
        this.country = data;
      },
      error: console.log,
    });
  } */
}
