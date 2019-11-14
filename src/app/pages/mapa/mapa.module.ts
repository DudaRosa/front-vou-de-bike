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
    LikeComponent
  ],
  exports: [
    MapaComponent,
    
  ],
  entryComponents:[
    LikeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class MapaModule { }
