import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../../models/country';
import { Observable, Subject} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private apiUrl = "http://localhost:3000/countries"

  countryList: Country[] = [];
  private dataUpdatedSource = new Subject<void>();
  dataUpdated$ = this.dataUpdatedSource.asObservable();

  /**
   * Emit a signal to inform subscribers that data has been updated
   */
  notifyDataUpdated() {
    this.dataUpdatedSource.next();
  }


  constructor(private http: HttpClient) { }

  /**
   * 
   * @returns  all countries
   */
  getAll(): Observable<Country[]> {
    return this.http.get<Country[]>(this.apiUrl);
  }

  /**
   * create new country
   * @param newCountry 
   * @returns 
   */
  create(newCountry: Country): Observable<Country> {
    return this.http.post<Country>(this.apiUrl, newCountry);
  }

  /**
   * delete country by id
   * @param id 
   * @returns 
   */
  delete(id: number): Observable<Country> {
    return this.http.delete<Country>(`${this.apiUrl}/${id}`);
  }

  /**
   * update country by id
   * @param id 
   * @param data 
   * @returns 
   */
  update(id: number, data: Country): Observable<Country> {
    return this.http.put<Country>(`${this.apiUrl}/${id}`, data);
  }

  /**
   * find country by id
   * @param id 
   * @returns 
   */
  findById(id: number): Observable<Country> {
    return this.http.get<Country>(`${this.apiUrl}?id=${id}`);
  }
}
