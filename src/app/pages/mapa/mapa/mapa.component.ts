import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { MapaService } from 'src/app/shared/services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  ativarResumo: boolean = false;
  ativarBtnRota: boolean = true;
  lat: number = -23.6862377;
  lng: number = -46.7618362;
  zoom: number = 15;
  enderecoPesquisa: string;

  constructor(
    private toastService: ToastService,
    private mapaService:  MapaService) { }

  ngOnInit() {
  }

  getAtivarRota() {
    this.ativarBtnRota = false;
  }
  getAtivarResumo() {
    this.ativarResumo = true;
  }

  pesquisaLocal() {
    if (this.enderecoPesquisa != null) {
      
    }
    else {
      // this.toastService.show('Insira o endereço !!', {timer:4});
      this.toastService.show('Insira o endereço !!', {
        delay: 2000,
        autohide: true
      });
    }

  }




}
