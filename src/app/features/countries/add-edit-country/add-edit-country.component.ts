import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Continent } from 'src/app/core/enums/continent.enum';
import { CountryService } from 'src/app/core/services/country/country.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-add-edit-country',
  templateUrl: './add-edit-country.component.html',
  styleUrls: ['./add-edit-country.component.css']
})
export class AddEditCountryComponent implements OnInit {


  form: FormGroup;
  continents: Continent[] = [Continent.Europe, Continent.Afrique, Continent.Antarctique, Continent.Asie, Continent.Oceanie, Continent.Amerique];

  selectedFile: any = null;

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0] ?? null;

  }
  constructor(private formBuilder: FormBuilder, private countryService: CountryService, private dialogRef: MatDialogRef<AddEditCountryComponent>) {
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
    if (this.form.valid) {
      console.log(this.form.value);
      this.countryService.create(this.form.value).subscribe({
        next: (data) => {
          alert('Country created successfully !')
          this.dialogRef.close();
        },
        error: (error) => {
          console.log(error);

        }
      })

    }
  }

  ngOnInit(): void {
  }

}
