import { Component, OnInit, Injectable } from '@angular/core';
import { NgbDateStruct, NgbCalendar, NgbDatepickerI18n, NgbCalendarPersian } from '@ng-bootstrap/ng-bootstrap';
import { typeWithParameters } from '@angular/compiler/src/render3/util';

const WEEKDAYS_SHORT = ['Seg', 'Ter', 'Quar', 'Quin', 'Sex', 'Sab', 'Dom'];
const MONTHS = ['Jan','Fev','Mar', 'Abri', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

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
    {provide: NgbCalendar, useClass: NgbCalendarPersian},
    {provide: NgbDatepickerI18n, useClass: NgbDatepickerI18nPersian}
  ]
})


export class NoticiaComponent implements OnInit {

  model: NgbDateStruct;
  today: Date = new Date;
  date:any;
  images = [1, 2, 3].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);

  constructor(private calendar: NgbCalendar) { 
     this.date = {year: this.today.getFullYear(), month: this.today.getMonth()};
    //  console.log("hoje >> ", this.model);
  }

  selectToday() {
    
  //  this.date = {year: this.today.getFullYear(), month: this.today.getMonth(), day: this.};
  }

  ngOnInit() {
  
  }

}
