import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/shared/services/toast.service';

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

  constructor(public toastService: ToastService) { }

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
      console.log("Teste do local >>  ", this.enderecoPesquisa)
    }
    else {
      this.toastService.show('Insira o endereço !!', {timer:4});
    }

  }




}
