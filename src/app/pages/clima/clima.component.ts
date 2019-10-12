import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  temp: any = [
    { dia: "SEG", data:"19/09", maxima: 26, minima: 26 },
    { dia: "TER", data:"20/09", maxima: 26, minima: 20 },
    { dia: "QUA", data:"21/09", maxima: 26, minima: 23 },
    { dia: "QUIN", data:"22/09", maxima: 30, minima: 27 },
    { dia: "SEX", data:"23/09", maxima: 45, minima: 40 },
    { dia: "SAB", data:"24/09", maxima: 10, minima: 3 },
    { dia: "DOM", data:"25/09", maxima: 21, minima: 20 },
  ]

  constructor() { }

  ngOnInit() {
  }


}
