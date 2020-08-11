import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/producto.interface';
import { resolve } from '../../../node_modules/@types/q';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //Esta variable que esta en true y la que esta dentro del método es para manejar un spinner
  cargando= true;
  prod: Producto[]= [];
  //Variable para la busqueda
  productoFiltrado: Producto[]= [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

  private cargarProductos(){
    return new Promise((resolve, rejects)=>{

      this.http.get('https://template-angular-b08b5.firebaseio.com/productos_idx.json')
      .subscribe((resp: Producto[])=>{
          /* console.log(resp) */
        this.prod= resp;
        //la variable cargando espera 2 segundos para cambiar el estado a false y ocultar el spinner
        setTimeout(() => {
           this.cargando= false;
        }, 2000);
        resolve();
      });
    });
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

  buscarProducto(busqueda: string){
    if(this.prod.length === 0){
      //Cargamos los productos
      this.cargarProductos().then(()=>{
        //Ejecutamos despues de que tenemos los productos, y aplicamos la busqueda
        this.filtrarProductos(busqueda);
      });
    } else{
      //Aplicamos la busqueda
      this.filtrarProductos(busqueda);
    }
  }
  private filtrarProductos(busqueda: string){
    /* console.log(this.prod); */
    //Con esto nos aseguramos que cada vez que se busque algo limpie los datos que ya tenia en pantalla
    this.productoFiltrado= []
    //Pasamos todo a minuscula
    busqueda = busqueda.toLocaleLowerCase();

    this.prod.forEach(produc =>{
      const tituloLower = produc.titulo.toLocaleLowerCase();

      if(produc.categoria.indexOf( busqueda)>=0 || tituloLower.indexOf( busqueda)>=0 ){
        this.productoFiltrado.push(produc);
      }
    })
  }
}
