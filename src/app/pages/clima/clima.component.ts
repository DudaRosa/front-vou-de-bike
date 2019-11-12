import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Clima } from 'src/app/shared/models/clima';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {
  listClima: Clima;
  imgClima: string;

  temp: any = [
    { dia: "SEG", data: "19/09", maxima: 26, minima: 26 },
    { dia: "TER", data: "20/09", maxima: 26, minima: 20 },
    { dia: "QUA", data: "21/09", maxima: 26, minima: 23 },
    { dia: "QUIN", data: "22/09", maxima: 30, minima: 27 },
    { dia: "SEX", data: "23/09", maxima: 45, minima: 40 },
    { dia: "SAB", data: "24/09", maxima: 10, minima: 3 },
    { dia: "DOM", data: "25/09", maxima: 21, minima: 20 },
  ]

  iconsClima: any = {
    cloud: '../../../assets/img/clima/icon-cloud.png',
    cloudy: '../../../assets/img/clima/icon-cloudy.png',
    cloudy1 :'../../../assets/img/clima/icon-cloudy-1.png',
    night: '../../../assets/img/clima/icon-night.png',
    night1: '../../../assets/img/clima/icon-night-1.png',
    rain: '../../../assets/img/clima/icon-rain.png',
    rain1: '../../../assets/img/clima/icon-rain-1.png',
    rain2: '../../../assets/img/clima/icon-rain-2.png',
    snowing: '../../../assets/img/clima/icon-snowing.png',
    snowing1: '../../../assets/img/clima/icon-snowing-1.png',
    snowing2: '../../../assets/img/clima/icon-snowing-2.png',
    snowing3: '../../../assets/img/clima/icon-snowing-3.png',
    storm: '../../../assets/img/clima/icon-storm.png',
    summer: '../../../assets/img/clima/icon-summer.png',
    sun: '../../../assets/img/clima/icon-sun.png',
    winter: '../../../assets/img/clima/icon-winter.png'
  };

  iconsClimaNoite: any = {
    night: '../../../assets/img/clima/icon-night.png',
    night1: '../../../assets/img/clima/icon-night-1.png',
  };
  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {

    this.activatedRoute.data.subscribe(data => {
      this.listClima = data.data[0];
      this.getImgClima();
    });
  }


  getImgClima(){
    if(this.listClima.description == 'Neblina'){
      this.imgClima = this.iconsClima.cloud;
    }
  }

}
