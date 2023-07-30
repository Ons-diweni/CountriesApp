import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { CountriesComponent } from './countries.component';
import { CountryListComponent } from './country-list/country-list.component';

const routes: Routes = [{ path: '', component: CountryListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }