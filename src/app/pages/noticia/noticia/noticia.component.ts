import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbCalendarPersian, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/shared/models/noticia';
import { Evento } from 'src/app/shared/models/evento';
import { ToastService } from '../../components/toaster/toast.service';

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
  listNoticias: Noticia[];
  listEvento: Evento[];
  dateEvento: Date;
  novaListaEvento: Evento[];

  eventos: any = [
    { data: "12-08-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
    { data: "12-11-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
    { data: "12-22-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
    { data: "12-21-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
    { data: "12-03-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
    { data: "12-17-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
    { data: "08-11-2019", titulo: "Pedalada São Paulo", local: "Parque Ibirapuera" },
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

  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private toastService:   ToastService ) {

  }

  onDateSelection(date: NgbDate) {
    // this.event = this.filterEvento(this.eventos, date.day);
  }

  filterEvento(eventos, date) {
    return eventos.filter(e => e.data === date);
  }
  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.listNoticias = data.data[0];
      this.listEvento = data.data[1];
      if(this.listEvento != null){
        this.novaListaEvento = this.converterDataEvento(this.listEvento);
      }
      else{
        this.toastService.default("Não há eventos para exibir no momento");
      }
    });

  }
  converterDataEvento(listaEvento) {

    for (let i = 0; i < listaEvento.length; i++) {

      listaEvento[i].data = new Date(listaEvento[i].data).getUTCDate();
    }
    return listaEvento;
  }

  getEventoMes() {
    this
      .noticiaService
      .getListEvento()
      .then(evento => {
        return this.listEvento = evento;
      });

  }
  getLink(link) {
    window.open(link);
  }
}
