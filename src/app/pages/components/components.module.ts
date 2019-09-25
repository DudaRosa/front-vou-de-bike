import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ClimaComponent } from "../clima/clima.component";
import { NoticiaComponent } from "../noticia/noticia.component";
import { SitesComponent } from "../parceiros/sites.component";
import { SobreComponent } from "../sobre/sobre.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MapaComponent } from "../mapa/mapa/mapa.component";
import { HomeComponent } from "../home/home.component";
import { MapaResolver } from "../mapa/resolvers/mapa.resolver";
import { NoticiaResolver } from "../noticia/resolvers/noticia.resolver";
import { MapaService } from "../mapa/services/mapa.service";
import { NoticiaService } from "../noticia/services/noticia.service";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbModule
  ],
  declarations: [
    HeaderComponent,
    ClimaComponent,
    MapaComponent,
    NoticiaComponent,
    SitesComponent,
    HomeComponent,
    SobreComponent
  ],
  exports: [
    HeaderComponent,
    ClimaComponent,
    MapaComponent,
    NoticiaComponent,
    SitesComponent,
    SobreComponent,
    HomeComponent
  ],
  providers:[
    MapaResolver,
    NoticiaResolver,
    MapaService,
    NoticiaService
  ]
})

export class ComponentsModule { }
