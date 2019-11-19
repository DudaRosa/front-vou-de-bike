import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LikeComponent } from './component/like/like.component';
import { MapaComponent } from './mapa/mapa.component';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CaloriasComponent } from './component/calorias/calorias.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormsModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk'
    }),
    AgmDirectionModule,
  ],
  declarations: [
    MapaComponent,
    LikeComponent,
    CaloriasComponent
  ],
  exports: [
    MapaComponent,
    
  ],
  entryComponents:[
    LikeComponent,
    CaloriasComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class MapaModule { }
