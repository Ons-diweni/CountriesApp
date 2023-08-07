import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CountriesRoutingModule } from './countries-routing.module';
import { CountriesComponent } from './countries.component';
import { CountryListComponent } from './components/country-list/country-list.component';
import { AddEditCountryComponent } from './components/add-edit-country/add-edit-country.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import { SharedModule } from '../../shared/shared.module';
import { CountryDetailsScreenComponent } from './pages/country-details-screen/country-details-screen.component';






@NgModule({
  declarations: [
    CountriesComponent,
    CountryListComponent,
    AddEditCountryComponent,
    CountryDetailsComponent,
    CountryDetailsScreenComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CountriesRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatTableModule,
    MatIconModule,
    MatGridListModule,
    MatListModule,
    
  ]
})
export class CountriesModule { }
