import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // propiedad que almacena la fecha del sistema, la cual es pasada en el footer
  anio : number = new Date().getFullYear();

  constructor(public infoPaginaS: InfoPaginaService) { }

  ngOnInit(): void {
  }

}
