import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //Esta variable que esta en true y la que esta dentro del método es para manejar un spinner
  cargando= true;
  prod: Producto[]= [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    this.http.get('https://template-angular-b08b5.firebaseio.com/productos.json')
    .subscribe((resp: Producto[])=>{
        console.log(resp)
      this.prod= resp;

      //la variable cargando espera 2 segundos para cambiar el estado a false y ocultar el spinner
      setTimeout(() => {
         this.cargando= false;
      }, 2000);
     
    })
  }
}
