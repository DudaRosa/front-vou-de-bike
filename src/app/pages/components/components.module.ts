import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ClimaComponent } from "../clima/clima.component";
import { NoticiaComponent } from "../noticia/noticia/noticia.component";
import { SobreComponent } from "../sobre/sobre/sobre.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MapaComponent } from "../mapa/mapa/mapa.component";
import { HomeComponent } from "../home/home.component";
import { MapaResolver } from "../mapa/resolvers/mapa.resolver";
import { NoticiaResolver } from "../noticia/resolvers/noticia.resolver";
import { ParceirosModule } from '../parceiros/parceiros.module';
import { ParceiroResolver } from '../parceiros/resolvers/parceiro.resolver';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { AgmCoreModule } from '@agm/core';
import { ToastComponent } from './toast/toast.component';
import { ClimaResolver } from '../clima/resolvers/clima.resolver';
import { ClimaService } from 'src/app/shared/services/clima.service';
import { MapaService } from 'src/app/shared/services/mapa.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbModule,
    ParceirosModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk'
    })
  ],
  declarations: [
    HeaderComponent,
    ClimaComponent,
    MapaComponent,
    NoticiaComponent,
    HomeComponent,
    SobreComponent,
    ToastComponent
  ],
  exports: [
    HeaderComponent,
    ClimaComponent,
    MapaComponent,
    NoticiaComponent,
    SobreComponent,
    HomeComponent
  ],
  providers:[
    MapaResolver,
    NoticiaResolver,
    ClimaResolver,
    ClimaService,
    MapaService,
    NoticiaService,
    ParceiroResolver
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class ComponentsModule { }
