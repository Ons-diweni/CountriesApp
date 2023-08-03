import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../../models/country';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = "http://localhost:3000/countries"

  countryList: Country[] = [];


  constructor(private http: HttpClient) { }

  // return all countries 
  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  // create new country
  create(newCountry: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, newCountry);
  }

  // delete country by id
  delete(id: number): Observable<Country> {
    return this.http.delete<Country>(`${this.apiUrl}/${id}`);
  }

  // update country by id
  update(id: number, data: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${id}`, data);
  }

  // find country by id
  findById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}?id=${id}`);
  }
}
