import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/pages/components/toaster/toast.service';
import { MapaService } from 'src/app/shared/services/mapa.service';
import { Mapa } from 'src/app/shared/models/mapa';
import { Local } from 'src/app/shared/models/local';
import { ActivatedRoute } from '@angular/router';
import { Clima } from 'src/app/shared/models/clima';


@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  itemParceiros1: any = [
    { titulo: "Yellow", categoria: "alugar", link: "https://www.yellow.app/promocoes" },
    { titulo: "Grin", categoria: "alugar", link: "https://ongrin.com/" },
    { titulo: "Bike Sampa", categoria: "alugar", link: "https://bikeitau.com.br/bikesampa/" },
    { titulo: "Pedala SP", categoria: "alugar", link: "http://pedalaspapp.com.br/" }
  ];
  listParceiros: any[];
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
  resumoClima: Clima;
  tempClima: number;
  umidadeClima: number;

  constructor(
    private toastService: ToastService,
    private mapaService: MapaService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.resumoClima = data.data[0];
    });

  }

  getAtivarRota() {
    this.ativarBtnRota = false;

  }
  getAtivarResumo() {

    if (this.enderecoOrigem && this.enderecoDestino && this.enderecoDestino.trim()) {

      this
        .mapaService
        .getRotaMapa(this.enderecoOrigem, this.enderecoDestino)
        .then((rota: Mapa) => {
          this.origin = { lat: rota[0].start_location.lat, lng: rota[0].start_location.lng };
          this.destination = { lat: rota[0].end_location.lat, lng: rota[0].end_location.lng };
          this.getParceiros();
          this.getResumoClimaProgressBar();
          this.ativarResumo = true;
        })
    } else {
      this.toastService // message
        .showToast({
          title: 'Endereço incorreto', // title
          message: 'Insira o endereço !!',
          theme: 'default', // type
          timer: 4 // timer
        });
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
      // this.toastService.default('Insira o endereço !!');
      this.toastService // message
        .showToast({
          title: 'Endereço incorreto', // title
          message: 'Insira o endereço !!',
          theme: 'default', // type
          timer: 4 // timer
        });
    }

  }

  getResumoClimaProgressBar() {
    this.tempClima = this.resumoClima.temp;
    this.umidadeClima = this.resumoClima.humidity;
  }

  getParceiros() {
    this.listParceiros = null;
    const i = Math.floor((Math.random() * 2) + 1);

    for (let index = 0; index < i; index++) {
      const listIndexParceiros = Math.floor((Math.random() * 3) + 1);

      // this.listParceiros.push(this.itemParceiros1[listIndexParceiros]);
      // this.toastService.default( this.itemParceiros1[listIndexParceiros].titulo);
      this.toastService // message
        .showToast({
          title: 'Parceiros próximos:', // title
          message: this.itemParceiros1[listIndexParceiros].titulo,
          theme: 'default', // type
          timer: 4 // timer
        });
    }

  }

  btnVoltar(){
    this.ativarResumo = false;
    this.ativarBtnRota = true;
  }

}
