import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima',
  templateUrl: './clima.component.html',
  styleUrls: ['./clima.component.scss']
})
export class ClimaComponent implements OnInit {

  temp: any = [
    { dia: "SEG", maxima: 26, minima: 26 },
    { dia: "TER", maxima: 26, minima: 20 },
    { dia: "QUA", maxima: 26, minima: 23 },
    { dia: "QUIN", maxima: 30, minima: 27 },
    { dia: "SEX", maxima: 45, minima: 40 },
    { dia: "SAB", maxima: 10, minima: 3 },
    { dia: "DOM", maxima: 21, minima: 20 },
  ]

  constructor() { }

  ngOnInit() {
  }


}
