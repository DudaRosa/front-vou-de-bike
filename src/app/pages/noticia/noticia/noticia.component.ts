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

  today: Date = new Date();
  date: any = { year: this.today.getFullYear(), month: this.today.getMonth() + 1, day: this.today.getDate() + 1 };
  event: any = [];
  listNoticias: Noticia[];
  listEvento: Evento[];
  dateEvento: Date;
  novaListaEvento: Evento[];
  listEvento2: any[];

  constructor(
    private noticiaService: NoticiaService,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService) {

  }

  onDateSelection(date: NgbDate) {
    this.novaListaEvento = this.filterEvento(this.listEvento, date);
  }

  filterEvento(eventos, date) {
    return eventos.filter(e => e.data === date.day && e.mes === date.month && e.ano === date.year);
  }
  ngOnInit() {
    console.log("date do calendario >> ", this.today.getDate());
    this.activatedRoute.data.subscribe(data => {
      this.listNoticias = data.data[0];
      this.listEvento = data.data[1];

      if (this.listEvento != null) {
        this.novaListaEvento = this.converterDataEvento(this.listEvento);
      }
      else {
        this.toastService.default("Não há eventos para exibir no momento");
      }
    });

  }
  converterDataEvento(listaEvento) {
    this.listEvento2 = listaEvento;

    for (let i = 0; i < this.listEvento2.length; i++) {


      this.listEvento2[i].mes = new Date(this.listEvento2[i].data).getUTCMonth() + 1; // mes
      this.listEvento2[i].ano = new Date(this.listEvento2[i].data).getFullYear(); // ano
      this.listEvento2[i].data = new Date(this.listEvento2[i].data).getUTCDate(); // dia
    }
    return this.listEvento2;
  }

  getEventoMes() {
    this
      .noticiaService
      .getListEvento()
      .then(evento => {
        if (evento != null) {
          this.novaListaEvento = this.converterDataEvento(evento);
        }
        else {
          this.toastService.default("Não há eventos para exibir no momento");
        }
      });

  }
  getLink(link) {
    window.open(link);
  }
}
