import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

                    //Nombre propuedad    Nombre del Servicio
  constructor(public infoPaginaS: InfoPaginaService, private router: Router) { }
  //Con router podemos hacer una navegacion interna en el componente, como llamar al search
      //Ahora ya podemos usar este servicio y pasarlo como interpolación en el HTML

  ngOnInit(): void {
  }

  buscarProducto( busqueda: string){
    if(busqueda.length <1 ){
      return;
    }
    this.router.navigate(['/search', busqueda]);
  }

}
