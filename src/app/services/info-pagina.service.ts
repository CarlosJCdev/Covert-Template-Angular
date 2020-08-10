import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargado= false;

  constructor(private http: HttpClient) { 
      //Leemo el archivo JSON, le indicamos donde esta el recurso
    this.http.get('assets/data/data-pagina.json')
    //Le indicamos que lo muestre mediante una subscripción
      //Le decimos que la respuesta sea de tipo InfoPagina
    .subscribe( (resp: InfoPagina) =>{
      /*Para mostrar un elemento expecifico del objeto en consola
      console.log(resp ['elemento'])
      */
     this.cargado= true;
     this.info = resp;
      console.log(resp);
    });
  
  }
}
