import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calorias',
  templateUrl: './calorias.component.html',
  styleUrls: ['./calorias.component.scss']
})
export class CaloriasComponent implements OnInit {

  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  fechar(wasUpdated?: boolean): void {
    this.ngbActiveModal.close(wasUpdated);
  }
}
