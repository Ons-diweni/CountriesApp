import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryListComponent } from './components/country-list/country-list.component';
import { AddEditCountryComponent } from './components/add-edit-country/add-edit-country.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { CountriesComponent } from './countries.component';
import { CountryDetailsScreenComponent } from './pages/country-details-screen/country-details-screen.component';


const routes: Routes = [
  { path: '', component: CountriesComponent , pathMatch:'full'},
  {path:'new' , component:AddEditCountryComponent},
  {path:'country/:id' , component:CountryDetailsComponent},
  {path:':id',component:CountryDetailsScreenComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CountriesRoutingModule { }
