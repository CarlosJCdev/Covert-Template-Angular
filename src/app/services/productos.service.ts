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
    this.http.get('https://template-angular-b08b5.firebaseio.com/productos_idx.json')
    .subscribe((resp: Producto[])=>{
        /* console.log(resp) */
      this.prod= resp;
      //la variable cargando espera 2 segundos para cambiar el estado a false y ocultar el spinner
      setTimeout(() => {
         this.cargando= false;
      }, 2000);
    })
  }

  
    //Con este método nos traeremos de firebase el objeto item de cada card, el cual esta en otra tabla de la BD
  getProducto( id: string){
    //Usamos template literals ``, los cuales nos permiten hacer incerciones de expresiones dentro de un string 
   // `http://egt/sdgb/${ id }.json`
   //No podemos hacer el subscribe a qui mismo, por que necesitamos regresar todo el objeto, para que 
   //en la pagina donde llamemos a este servicio, podamos suscribirnos hay y mostrar los datos
   //Por eso usamos return
   return this.http.get(`https://template-angular-b08b5.firebaseio.com/productos/${id}.json`)
  }
}
