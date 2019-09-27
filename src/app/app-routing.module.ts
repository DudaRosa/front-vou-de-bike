import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { MapaComponent } from './pages/mapa/mapa/mapa.component';
import { NoticiaComponent } from './pages/noticia/noticia.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { SitesComponent } from './pages/parceiros/parceiros/sites.component';


const routes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'home',
      component: HomeComponent
  },
  {
      path: 'clima',
      component: ClimaComponent
  },
  {
      path: 'mapa',
      component: MapaComponent
  },
  {
      path: 'noticia',
      component: NoticiaComponent
  },
  {
      path: 'parceiros',
      component: SitesComponent
  },
  {
      path: 'sobre',
      component: SobreComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
