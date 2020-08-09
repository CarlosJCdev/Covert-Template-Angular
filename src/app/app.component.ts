import { Component } from '@angular/core';
import { InfoPaginaService } from './services/info-pagina.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //EL constructor en esta pagina inicial hara una inyección de dependecias o servicios
  constructor(public infoService: InfoPaginaService){
    
  }
}
