import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(private _dialog: MatDialog) { }

  openAddFrom() {
    this._dialog.open(AddEditCountryComponent)
  }

  ngOnInit(): void {
  }

}
