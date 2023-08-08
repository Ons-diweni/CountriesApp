import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Country } from 'src/app/core/models/country';
import { CountryService } from 'src/app/core/services/country/country.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCountryComponent } from '../add-edit-country/add-edit-country.component';




@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['nom', 'population', 'superficie', 'continent', 'pib', 'image', ' '];
  dataSource = new MatTableDataSource<Country>([]);
  //countriesList: Country[] = [];

  constructor(private countryService: CountryService, private _liveAnnouncer: LiveAnnouncer, private _dialog: MatDialog,private router: Router) { }
  @ViewChild(MatSort) sort!: MatSort;
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getCountriesList()
    this.countryService.dataUpdated$.subscribe(() => {
      this.getCountriesList();
    });
  }

  /**
   * Call the getAll() service and subscribe to the observable to retrieve the data
   */
  getCountriesList() {
    this.countryService.getAll().subscribe({
      next: (data) => {
        this.dataSource = new MatTableDataSource(data)
      },
      error: console.log,
    });
  }


  /**
   * Call the delete() service and re-execute the getCOuntriesList method to update data
   * @param id 
   */
  deleteCountry(id: number) {
    this.countryService.delete(id).subscribe({
      next: (res) => {
        this.getCountriesList();
      },
      error: console.log,
    });
  }


  /**
   * Opens a dialog for editing country data
   * @param data The country data to be edited
   */
  openEditForm(data: Country) {
    const dialogRef = this._dialog.open(AddEditCountryComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        this.getCountriesList();
      },
      error: console.log,
    });
  }

  /**
   * 
   * @param id 
   */
  viewCountryDetails(id: number,event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
  if (
    !targetElement.closest('.customIcon') &&
    !targetElement.closest('.mat-icon-button')
  ) {
    this.router.navigate(['countries', id]);
  }
  }

  /**
   * 
   * @param column name of the column 
   */
  sortData(column: keyof Country) {
    const data = [...this.dataSource.data];
  
    if (column === 'nom' || column === 'continent') {
      data.sort((a, b) => a[column].localeCompare(b[column]));
    } else {
      data.sort((a, b) => {
        const numA = a[column] as number;
        const numB = b[column] as number;
        return numA < numB ? -1 : (numA > numB ? 1 : 0);
      });
    }
  
    this.dataSource.data = data;
  }
}


