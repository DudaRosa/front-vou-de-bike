import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CupomComponent } from '../components/cupom/cupom.component';
import { ParceirosService } from 'src/app/shared/services/parceiros.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  itemParceiros1: any = [
    { img: "../assets/img/sites/sites_yellow.png", borderColor: "#ffcb00", titulo: "Yellow", categoria:"alugar", link: "https://www.yellow.app/promocoes" },
    { img: "../assets/img/sites/sites_grin.png", borderColor: "#0cd870", titulo: "Grin", categoria:"alugar", link: "https://ongrin.com/" },
    { img: "../assets/img/sites/sites_itau.png", borderColor: "#ee7202", titulo: "Bike Sampa", categoria:"alugar", link: "https://bikeitau.com.br/bikesampa/" },
    { img: "../assets/img/sites/sites_centauro.jpg", borderColor: "#c9244a", titulo: "Centauro", categoria:"comprar", link: "https://www.loucospordesconto.com.br/track/go/lpd/deal-852298?m%5Bgac%5D=1898392780.1569594481" },
    { img: "../assets/img/sites/sites_centauro.jpg", borderColor: "#c9244a", titulo: "Centauro", categoria:"comprar", link: "https://www.loucospordesconto.com.br/track/go/lpd/deal-852298?m%5Bgac%5D=1898392780.1569594481" },
  ];
  cuponsYellow: any = [
    { descricao: "Casa Natura Musical: para shows com 50% de desconto", cupom: "YELLOW50", validade: "14/12/2019" },
    { descricao: "Casa Natura Musical: para shows com 50% de desconto", cupom: "YELLOW20", validade: "14/12/2019" },
    { descricao: "?", cupom: "?", validade: "?" },
    { descricao: "?", cupom: "?", validade: "?" },
    { descricao: "?", cupom: "?", validade: "?" },
    { descricao: "?", cupom: "?", validade: "?" },
  ]
  cuponsGrin: any = [
    { descricao: "Primeiro Passeio de patinete Grátis", cupom: "CKD7K9", validade: "Válido por tempo indeterminado e pode expirar sem aviso prévio." },
    { descricao: "Ganhe uma viagem grátis no Grin Scooter", cupom: "DTM9DA" , validade: "Válido por tempo indeterminado e pode expirar sem aviso prévio."},
    { descricao: "?", cupom: "?", validade: "?" },
    { descricao: "?", cupom: "?", validade: "?" },
    { descricao: "?", cupom: "?" , validade: "?" },

  ]
  cuponsBikeSampa: any = [
    { descricao: "Plano Mensal Gratuito - Bike Sampa - Bike ITAÚ (Novos usuários)", cupom: "PEDALECOMJOTA" , validade: "22/11/2019"},
    { descricao: "Um Mês Grátis Bike Itaú", cupom: "ANODAMOBILIDADE", validade: "12/01/2020" },
    { descricao: "?", cupom: "?" , validade: "?"},
    { descricao: "?", cupom: "?" , validade: "?"},
    { descricao: "?", cupom: "?" , validade: "?"},
    { descricao: "?", cupom: "?" , validade: "?"},
    { descricao: "?", cupom: "?" , validade: "?"},
    { descricao: "?", cupom: "?" , validade: "?"},
    { descricao: "?", cupom: "?" , validade: "?"},
  ]
  cuponsCentauro: any = [
    { descricao: "Bikes com cupom de desconto de 10% OFF", cupom: "BIKE10OFF" , validade: "31/12/2019"},
    { descricao: "Cupom Centauro de 17% de desconto para produtos da seleção", cupom: "RAKUTEN17" , validade: "31/12/2019"},
    { descricao: "Ganhe 20% de desconto em todos os esporte", cupom: "ESPORTES20" , validade: "31/12/2019"},
    { descricao: "Lista exclusiva do canal com 20% de desconto usando o cupom Centauro", cupom: "PARCERIAS20", validade: "31/12/2019" },
    { descricao: "?", cupom: "?" , validade: "?"},
  ]
  itemParceiros2: any = [
    { img: "../assets/img/sites/sites_pedala.png", titulo: "Pedala SP", descricao: "Pedala SP é um aplicativo sobre estrutura cicloviária, além de incluir pontos importantes no meio do trajeto por São Paulo.", link: "http://pedalaspapp.com.br/" }
  ];
  constructor(
    private bsDialogService: NgbModal,
    private parceirosService: ParceirosService,
  ) { }

  ngOnInit() {
  }

  openDialogCupom(item) {
    console.log(this.parceirosService.getById('Yellow'))
    // const modalRef = this.bsDialogService.open(CupomComponent, { size: "lg" });
    // modalRef.componentInstance.item = item;
    // if (item.titulo === "Yellow") {
    //   modalRef.componentInstance.cupons = this.cuponsYellow;
    // } else if (item.titulo === "Grin") {
    //   modalRef.componentInstance.cupons = this.cuponsGrin;
    // } else if (item.titulo === "Bike Sampa") {
    //   modalRef.componentInstance.cupons = this.cuponsBikeSampa;
    // } else if (item.titulo === "Centauro") {
    //   modalRef.componentInstance.cupons = this.cuponsCentauro;
    // }
  }
}
