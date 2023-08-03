import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Gestion de pays';
  buttonTopRight= 'Exporter en CSV';
  buttonTopLeft='Recherche';
  buttonBottom='Ajouter';
}
