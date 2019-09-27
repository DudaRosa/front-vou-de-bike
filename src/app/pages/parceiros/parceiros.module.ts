import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { SitesComponent } from './parceiros/sites.component';
import { CupomComponent } from './components/cupom/cupom.component';
import { HeaderComponent } from '../components/header/header.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule
  ],
  declarations: [
    SitesComponent,
    CupomComponent
  ],
  exports: [
    SitesComponent,
    
  ],
  entryComponents:[
    CupomComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
  ],
})

export class ParceirosModule { }
