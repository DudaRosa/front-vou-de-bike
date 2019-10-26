import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  ativarResumo: boolean = false;
  ativarBtnRota: boolean = true;
  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  constructor() { }

  ngOnInit() {
  }

  getAtivarRota(){
    this.ativarBtnRota = false;
  }
  getAtivarResumo(){
    this.ativarResumo = true;
  }
}
