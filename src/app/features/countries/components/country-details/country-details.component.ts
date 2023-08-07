import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country/country.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country: Country | undefined;
  id!: number;
  constructor(private route: ActivatedRoute, private countryService: CountryService) { }

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
        console.log(data);
        console.log(this.country.image);
      },
      error: console.log,
    });
  }
}
