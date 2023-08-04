import { Component, OnInit,ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country/country.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';



@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'population', 'superficie', 'continent', 'pib', 'image'];
  dataSource = new MatTableDataSource<any>([]);
  countriesList: Country[] = [];

  constructor(private countryService: CountryService , private _liveAnnouncer: LiveAnnouncer) { }
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getCOuntriesList()

  }

  getCOuntriesList() {
    // Appeler la méthode getAll() et s'abonner à l'observable pour récupérer les données
    this.countryService.getAll().subscribe({
      next: (data) => {
        this.dataSource= new MatTableDataSource(data)
      },
      error: (error) => {
        console.log

      }
    });
  }

   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}

