import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';
import { MapaService } from 'src/app/shared/services/mapa.service';
import { Mapa } from 'src/app/shared/models/mapa';
import { Local } from 'src/app/shared/models/local';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
  listLocal: any;
  ativarResumo: boolean = false;
  ativarBtnRota: boolean = true;
  public lat: number = -23.6862377;
  public lng: number = -46.7618362;
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

          this.origin = { lat: rota[0].start_location.lat, lng: rota[0].start_location.lng };
          this.destination = { lat: rota[0].end_location.lat, lng: rota[0].end_location.lng };
          this.ativarResumo = true;
        })
    }
  }

  pesquisaLocal() {
    if (this.enderecoOrigem != null) {
      this.mapaService
        .getLocalMapa(this.enderecoOrigem)
        .then((local: Local) => {
          console.log("local >> ", local);
          this.lat = local[0].geometry.location.lat;
          this.lng = local[0].geometry.location.lng;
          this.ativarResumo = false;
          this.ativarBtnRota = true;
        })
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
