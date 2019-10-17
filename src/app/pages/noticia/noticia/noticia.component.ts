import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbCalendarPersian, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { NoticiaService } from 'src/app/shared/services/noticia.service';

const WEEKDAYS_SHORT = ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'];
const MONTHS = ['Jan', 'Fev', 'Mar', 'Abri', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

@Injectable()
export class NgbDatepickerI18nPersian extends NgbDatepickerI18n {
  getWeekdayShortName(weekday: number) { return WEEKDAYS_SHORT[weekday - 1]; }
  getMonthShortName(month: number) { return MONTHS[month - 1]; }
  getMonthFullName(month: number) { return MONTHS[month - 1]; }
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
  date: any = { year: this.today.getFullYear(), month: this.today.getMonth(), day: this.today.getDay() };
  event: any = [];

  eventos: any = [
    { data: 7, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: 13, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: 25, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: 28, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: 15, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: 15, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
    { data: 15, titulo: "Pedalada São Paulo", local: "Parque Ibirapuera", horario: "08h00 - 10h00" },
  ]

  noticias: any = [
    {
      titulo: "Bike Sampa lança bicicletas elétricas compartilhadas em São paulo.",
      desc: "Operação de teste com 20 unidades começa a partir de segunda-feira na capital paulista",
      link: "https://exame.abril.com.br/pme/bike-sampa-lanca-bicicletas-eletricas-compartilhadas-em-sao-paulo/",
      img: "../assets/img/noticia/noticia-1.jpeg",
    },
    {
      titulo: "Ciclovias em São Paulo incentivam uso de bicicletas, diz estudo.",
      desc: "A baixa aderência ao uso de bicicleta na cidade mostra necessidade de programas de incentivo",
      link: "https://exame.abril.com.br/ciencia/ciclovias-em-sao-paulo-incentivam-uso-de-bicicletas-diz-estudo/",
      img: "../assets/img/noticia/noticia-2.jpg",
    },
    {
      titulo: "Andou muito de bike e roupa social? Tome banho no meio da Faria Lima.",
      desc: "Para utilizar o serviço, é necessário um cadastro no aplicativo Sports To Go; banho avulso custa R$ 12.",
      link: "https://exame.abril.com.br/pme/andou-muito-de-bike-e-roupa-social-tome-banho-no-meio-da-faria-lima/",
      img: "../assets/img/noticia/noticia-3.gif",
    }
  ]

  constructor(private noticiaService: NoticiaService) {

}

onDateSelection(date: NgbDate) {
  this.event = this.filterEvento(this.eventos, date.day);
}

filterEvento(eventos, date) {
  return eventos.filter(e => e.data === date);
}
ngOnInit() {

}

getEventoMes(){
  return this.event = this.eventos;
}
getLink(link) {
  // window.open(link);
  console.log(this.noticiaService.getNoticias());
}
}
