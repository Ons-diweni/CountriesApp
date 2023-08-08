import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';
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

  @Output() exportCSVClicked: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {

  }

  handleButtonTopRightClick() {    
    if (this.buttonTopRight === 'Gestion des pays') {
      console.log(this.buttonBottom);
      this.router.navigate(['countries']);
    } else if (this.buttonTopRight === 'Exporter en CSV') {      
      this.exportCSVClicked.emit();  
    } 
  }

  openAddFrom() {
    this._dialog.open(AddEditCountryComponent)
  }


}
