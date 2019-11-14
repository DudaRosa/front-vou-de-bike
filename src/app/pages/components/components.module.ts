import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { ClimaComponent } from "../clima/clima.component";
import { NoticiaComponent } from "../noticia/noticia/noticia.component";
import { SobreComponent } from "../sobre/sobre/sobre.component";
import { RouterModule } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HomeComponent } from "../home/home.component";
import { MapaResolver } from "../mapa/resolvers/mapa.resolver";
import { NoticiaResolver } from "../noticia/resolvers/noticia.resolver";
import { ParceirosModule } from '../parceiros/parceiros.module';
import { ParceiroResolver } from '../parceiros/resolvers/parceiro.resolver';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { AgmCoreModule } from '@agm/core';
import { ClimaResolver } from '../clima/resolvers/clima.resolver';
import { ClimaService } from 'src/app/shared/services/clima.service';
import { MapaService } from 'src/app/shared/services/mapa.service';
import { FormsModule } from '@angular/forms';
import { AgmDirectionModule } from 'agm-direction'; 
import { ToasterModule } from './toaster/toaster.module';
import { ToastService } from './toaster/toast.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapaModule } from '../mapa/mapa.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    NgbModule,
    ParceirosModule,
    FormsModule,
    ToasterModule,
    BrowserAnimationsModule,
    MapaModule
  ],
  declarations: [
    HeaderComponent,
    ClimaComponent,
    NoticiaComponent,
    HomeComponent,
    SobreComponent,
  ],
  exports: [
    HeaderComponent,
    ClimaComponent,
    NoticiaComponent,
    SobreComponent,
    HomeComponent,
    ToasterModule
  ],
  providers:[
    MapaResolver,
    NoticiaResolver,
    ClimaResolver,
    ClimaService,
    MapaService,
    NoticiaService,
    ParceiroResolver,
    ToastService
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class ComponentsModule { }
