import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClimaComponent } from './pages/clima/clima.component';
import { MapaComponent } from './pages/mapa/mapa/mapa.component';
import { NoticiaComponent } from './pages/noticia/noticia/noticia.component';
import { SobreComponent } from './pages/sobre/sobre/sobre.component';
import { HomeComponent } from './pages/home/home.component';
import { SitesComponent } from './pages/parceiros/parceiros/sites.component';
import { ParceiroResolver } from './pages/parceiros/resolvers/parceiro.resolver';
import { NoticiaResolver } from './pages/noticia/resolvers/noticia.resolver';
import { ClimaResolver } from './pages/clima/resolvers/clima.resolver';


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
        component: ClimaComponent,
        resolve: {
            data: ClimaResolver
        }
    },
    {
        path: 'mapa',
        component: MapaComponent
    },
    {
        path: 'noticia',
        component: NoticiaComponent,
        resolve: {
            data: NoticiaResolver
        }
    },
    {
        path: 'parceiros',
        component: SitesComponent,
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
