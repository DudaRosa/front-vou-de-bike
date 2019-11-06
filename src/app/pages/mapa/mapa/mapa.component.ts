import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { MapaService } from 'src/app/shared/services/mapa.service';
import { Mapa } from 'src/app/shared/models/mapa';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  listLocal: any;
  ativarResumo: boolean = false;
  ativarBtnRota: boolean = true;
  lat: number = -23.6862377;
  lng: number = -46.7618362;
  zoom: number = 15;
  enderecoOrigem: string;
  enderecoDestino: string;
  public origin: any;
  public destination: any;


  constructor(
    private toastService: ToastService,
    private mapaService: MapaService) { }

  ngOnInit() {
    // this.origin = { lat: this.lat, lng: this.lng };
    // this.destination = { lat: -23.645384, lng: -46.754433 };

  }

  getAtivarRota() {
    this.ativarBtnRota = false;

  }
  getAtivarResumo() {

    if (this.enderecoOrigem != null && this.enderecoDestino != null) {
     
  
      this
        .mapaService
        .getRotaMapa(this.enderecoOrigem, this.enderecoDestino)
        .then((rota: Mapa) => {

          this.origin = { lat: rota.start_location.lat, lng: rota.start_location.lng };
          this.destination = { lat: rota.end_location.lat, lng: rota.end_location.lng };
          this.ativarResumo = true;
        })
    }
  }

  pesquisaLocal() {
    if (this.enderecoOrigem != null) {
      this.mapaService.getLocalMapa(this.enderecoOrigem);
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
