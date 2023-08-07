import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddEditCountryComponent } from 'src/app/features/countries/components/add-edit-country/add-edit-country.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string = '';
  @Input() buttonTopRight: string = '';
  @Input() buttonTopLeft: string = '';
  @Input() buttonBottom: string = '';

  path:string=''
  constructor(private _dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {

  }

  handleButtonClick() {    
    if (this.buttonTopRight === 'Gestion des pays') {
      console.log(this.buttonBottom);
      this.router.navigate(['countries']);
    } 
  }

  openAddFrom() {
    this._dialog.open(AddEditCountryComponent)
  }


}
