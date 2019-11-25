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
 parceiros: any;
  constructor(
    private bsDialogRef: NgbActiveModal
  ) { }

  ngOnInit() {

  }

  close() {
    this.bsDialogRef.close();
  }

  getCupons() {
    window.open(this.parceiros.link);
  }
}
