import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  itemParceiros1: any=[
    {img:"../assets/img/sites/sites_yellow.png", titulo:"Yellow", descricao:"A Yellow fornece o serviço de aluguel de bikes pela cidade de São Paulo! Bastabaixar o aplicativo e começar a pedalar.",link:"https://www.yellow.app/"},
    {img:"../assets/img/sites/sites_grin.png", titulo:"Grin", descricao:"O Grin fornece o serviço de patinete elétrico. Não é exatamente uma bicicleta, mas tem os mesmo beneficios! Está disponível em várias cidades do Brasil e do mundo.",link:"https://ongrin.com/"},
    {img:"../assets/img/sites/sites_itau.png", titulo:"Bike Sampa", descricao:"O Bike Sampa é o sistema de aluguel de bicicletas do Banco Itaú, muito simples de ser utilizada e existem estações espalhadas por SP inteira!",link:"https://bikeitau.com.br/bikesampa/"}
    
  ];
  itemParceiros2: any=[
    {img:"../assets/img/sites/sites_pedala.png", titulo:"Pedala SP", descricao:"Pedala SP é um aplicativo sobre estrutura cicloviária, além de incluir pontos importantes no meio do trajeto por São Paulo.",link:"http://pedalaspapp.com.br/"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
