import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Continent } from 'src/app/core/enums/continent.enum';
import { CountryService } from 'src/app/core/services/country/country.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/core/models/country';



@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {

  ngOnInit(): void {
    this.form.patchValue(this.data);
  }
  @Output() dataUpdated: EventEmitter<void> = new EventEmitter<void>();

  form: FormGroup;
  continents: Continent[] = [Continent.Europe, Continent.Afrique, Continent.Antarctique, Continent.Asie, Continent.Oceanie, Continent.Amerique];

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }
  constructor(
    private formBuilder: FormBuilder,
    private countryService: CountryService,
    private dialogRef: MatDialogRef<AddEditCountryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Country) {
    this.form = this.formBuilder.group({
      nom: '',
      population: '',
      superficie: '',
      continent: '',
      pib: '',
      image: '',
    })
  }


  onSubmit() {
    if (this.data) {
      if (this.form.valid) {
        console.log(this.form.value);
        this.countryService.update(this.data.id, this.form.value).subscribe({
          next: (data) => {
            alert('Country updated successfully !')
            this.dialogRef.close();
          },
          error: (error) => {
            console.log(error);

          }
        })

      }

    } else {
      if (this.form.valid) {
        console.log(this.form.value);
        this.countryService.create(this.form.value).subscribe({
          next: (data) => {
            alert('Country created successfully !')
            this.dialogRef.close();
            this.countryService.notifyDataUpdated();
          },
          error: (error) => {
            console.log(error);

          }
        })

      }
    }
  }

}
