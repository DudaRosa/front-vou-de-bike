import { Component, OnInit } from '@angular/core';
import { MapaService } from 'src/app/shared/services/mapa.service';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {
 listLocal: any;
  ativarResumo: boolean = false;
  ativarBtnRota: boolean = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor(
    private mapaService: MapaService
  ) { }

  ngOnInit() {
  }

  getLocal() {
    this.mapaService.getMapa().subscribe(data =>{
      console.log("teste do retorno >> ", data);
    });
  }
  getAtivarRota() {
    this.ativarBtnRota = false;
  }
  getAtivarResumo() {
    this.ativarResumo = true;
  }
}
