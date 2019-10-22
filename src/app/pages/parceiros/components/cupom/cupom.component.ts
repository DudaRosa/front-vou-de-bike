import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cupom',
  templateUrl: './cupom.component.html',
  styleUrls: ['./cupom.component.scss']
})
export class CupomComponent implements OnInit {
 cupons: any;
 item: string;

  constructor(
    private bsDialogRef: NgbActiveModal
  ) { }

  ngOnInit() {
    console.log("cupons",this.cupons);
  }

  close() {
    this.bsDialogRef.close();
  }

  getCupons(link) {
    window.open(link);
  }
}
