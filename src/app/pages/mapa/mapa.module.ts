import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { LikeComponent } from './component/like/like.component';
import { MapaComponent } from './mapa/mapa.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
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
