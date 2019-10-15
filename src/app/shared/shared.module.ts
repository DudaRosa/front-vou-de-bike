import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParceirosService } from './services/parceiros.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
   
  ],
  declarations: [
  ],
  exports: [
  ],
  providers: [
   ParceirosService
  ]
})
export class SharedModule {}
