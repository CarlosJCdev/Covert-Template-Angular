import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: any = {};
  cargado= false;

  constructor(private http: HttpClient) { 
      //Leemo el archivo JSON, le indicamos donde esta el recurso
    this.http.get('assets/data/data-pagina.json')
    //Le indicamos que lo muestre mediante una subscriocion
    .subscribe( resp =>{
      /*Para mostrar un elemento expecifico del objeto en consola
      console.log(resp ['elemento'])
      */
     this.info = resp;
     this.cargado= true;
      console.log(resp);
    });
  
  }
}
