import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string= '';
  @Input() buttonTopRight: string= '';
  @Input() buttonTopLeft: string= '';
  @Input() buttonBottom: string= '';
  


  constructor() { }

  ngOnInit(): void {
  }

}
