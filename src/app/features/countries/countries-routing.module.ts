import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CountriesComponent } from './countries.component';
import { CountryListComponent } from './country-list/country-list.component';
import { AddEditCountryComponent } from './add-edit-country/add-edit-country.component';

const routes: Routes = [{ path: '', component: CountryListComponent } , {path:'new' , component:AddEditCountryComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
