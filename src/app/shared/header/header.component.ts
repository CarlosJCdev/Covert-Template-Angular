import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

                    //Nombre propuedad    Nombre del Servicio
  constructor(public infoPaginaS: InfoPaginaService) { }
      //Ahora ya podemos usar este servicio y pasarlo como interpolación en el HTML

  ngOnInit(): void {
  }

}
