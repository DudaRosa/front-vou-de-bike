import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbCalendarPersian, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

const WEEKDAYS_SHORT = ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'];
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abri', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) { return WEEKDAYS_SHORT[weekday]; }
  getMonthShortName(month: number) { return MONTHS[month]; }
  getMonthFullName(month: number) { return MONTHS[month]; }
  getDayAriaLabel(date: NgbDateStruct): string { return `${date.year}-${this.getMonthFullName(date.month)}-${date.day}`; }
}

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
  providers: [
    { provide: NgbCalendar, useClass: NgbCalendarPersian },
    { provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian }
  ]
})


export class NoticiaComponent implements OnInit {

  today: Date = new Date;
  date: any = {year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDay()};
  

  eventos: any = [
    { data: "07", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: "13", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: "25", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: "28", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: "15", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
  ]

  noticias: any = [
    {
      titulo: "Bike Sampa lança bicicletas elétricas compartilhadas em São paulo",
      desc: "Operação de teste com 20 unidades começa a partir de segunda-feira na capital paulista", 
      link: "https://exame.abril.com.br/pme/bike-sampa-lanca-bicicletas-eletricas-compartilhadas-em-sao-paulo/",
      img: "../assets/img/noticia/noticia-1.jpeg",
    }
  ]

  constructor() {

  }

  onDateSelection(date: NgbDate) {
 console.log("date ", date);
  }

  ngOnInit() {

  }

  getLink(link) {
    window.open(link);
  }

}
