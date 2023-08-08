import { Component, OnInit, ViewChild} from '@angular/core';
import { CountryListComponent } from './components/country-list/country-list.component';


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
  @ViewChild(CountryListComponent, { static: true }) countryListComponent!: CountryListComponent;

  constructor() { }

  ngOnInit(): void {
  }

  onExportCSVClicked() {
    this.countryListComponent.exportToCSV();
  }
}
