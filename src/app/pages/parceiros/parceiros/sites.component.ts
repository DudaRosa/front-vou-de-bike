import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CupomComponent } from '../components/cupom/cupom.component';
import { ParceirosService } from 'src/app/shared/services/parceiros.service';
import { ActivatedRoute } from '@angular/router';
import { Cupom } from 'src/app/shared/models/cupom';


@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.scss']
})
export class SitesComponent implements OnInit {
  cupom: Cupom[];

  itemParceiros1: any = [
    { img: "../assets/img/sites/sites_yellow.png", borderColor: "#ffcb00", titulo: "Yellow", categoria: "alugar", link: "https://www.yellow.app/promocoes" },
    { img: "../assets/img/sites/sites_grin.png", borderColor: "#0cd870", titulo: "Grin", categoria: "alugar", link: "https://ongrin.com/" },
    { img: "../assets/img/sites/sites_itau.png", borderColor: "#ee7202", titulo: "Bike Sampa", categoria: "alugar", link: "https://bikeitau.com.br/bikesampa/" },
    { img: "../assets/img/sites/sites_centauro.jpg", borderColor: "#c9244a", titulo: "Centauro", categoria: "comprar", link: "https://www.loucospordesconto.com.br/track/go/lpd/deal-852298?m%5Bgac%5D=1898392780.1569594481" },
    { img: "../assets/img/sites/sites_centauro.jpg", borderColor: "#c9244a", titulo: "Centauro", categoria: "comprar", link: "https://www.loucospordesconto.com.br/track/go/lpd/deal-852298?m%5Bgac%5D=1898392780.1569594481" },
    { img: "../assets/img/sites/sites_pedala.png", borderColor: "#001f4c", titulo: "Pedala SP", categoria: "alugar", link: "http://pedalaspapp.com.br/" }
  ];

  constructor(
    private bsDialogService: NgbModal,
    private parceirosService: ParceirosService,
  ) { }

  ngOnInit() {

  }

  openDialogCupom(item) {
    const listCupom = this
      .parceirosService
      .getByParceiro(item.titulo)
      .then((cupom: Cupom[]) => {
        this.cupom = cupom;

        const modalRef = this.bsDialogService.open(CupomComponent, { size: "lg" });
        modalRef.componentInstance.cupons = this.cupom;
        modalRef.componentInstance.item = item.titulo;
      });
  }
}
