import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // propiedad que almacena la fecha del sistema, la cual es pasada en el footer
  anio : number = new Date().getFullYear();

  constructor() { }

  ngOnInit(): void {
  }

}
