import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';

/*En esta constante de tipo array definimos las rutas que la app manejara 
Si se ingresa cualquier ruta desconocida usamos **, con patmatch es cualquier busqueda, y 
redireccionamos a '' que es el portafolioComponent
*/
const routes: Routes = [
  {path: 'home', component: PortafolioComponent},
  {path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'search/:busqueda', component: SearchComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  /* con el uso del hash, prevenimos que cuando subamos nuestra pagina a algun servidor
  agregue un #, el cual le inidica al navegador que lo que sigue del # es una parte de la ruta del index.html, esto es 
  cuando no tenemos acceso al ht.access */
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
