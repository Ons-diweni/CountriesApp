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
        console.log(val);
        this.getCountriesList();
      },
      error: console.log,
    });
  }

  /**
   * 
   * @param id 
   */
  viewCountryDetails(id: number) {
    this.router.navigate(['countries/country', id]);
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


