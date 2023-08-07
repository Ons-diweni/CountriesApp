import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { AddEditCountryComponent } from './components/add-edit-country/add-edit-country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ScreenOneComponent } from './pages/screen-one/screen-one.component';
import { CountriesComponent } from './countries.component';


const routes: Routes = [
  { path: '', component: CountryListComponent },
  {path:'new' , component:AddEditCountryComponent},
  {path:'country/:id' , component:CountryDetailsComponent},
  {path:'screenOne' , component:ScreenOneComponent},
  {path:'parent',component:CountriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
