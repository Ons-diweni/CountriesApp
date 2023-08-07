import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-screen-one',
  templateUrl: './screen-one.component.html',
  styleUrls: ['./screen-one.component.css']
})
export class ScreenOneComponent implements OnInit {

  constructor() { }
  title = 'Gestion de pays';
  buttonTopRight= 'Exporter en CSV';
  buttonTopLeft='Recherche';
  buttonBottom='Ajouter';
  ngOnInit(): void {
  }

}
