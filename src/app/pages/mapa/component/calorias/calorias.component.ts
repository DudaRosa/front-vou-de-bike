import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-calorias',
  templateUrl: './calorias.component.html',
  styleUrls: ['./calorias.component.scss']
})
export class CaloriasComponent implements OnInit {
  tempoAtividade: any;
  peso: any;
  ritmo: any;
  tipoTempo: any;
  resultadoCalorias: string;

  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  fechar(wasUpdated?: boolean): void {
    this.ngbActiveModal.close(wasUpdated);
  }

  calculateWFM() {
    var hr;
    var kg;
    var cb;

    if (this.peso == '' && this.peso.trim()) {
      alert('Por favor, insira um número válido');
      document.getElementById('txtWeightWFM').focus();
      return false;
    }
    else {
      kg = this.peso;
    }

    if (this.tempoAtividade == '' && this.tempoAtividade.trim()) {
      alert('Por favor, insira um tempo válido');
      document.getElementById('txtTimeWFM').focus();
      return false;
    }

    if (this.tipoTempo != 1) {
      hr = this.tempoAtividade / 60;
    }
    else {
      hr = this.tempoAtividade;
    }

    if (kg > 182 || kg < 22) {
      alert('Por favor, insira um número válido');
      document.getElementById('txtWeightWFM').focus();
      return false;
    }

    if (hr > 12 || hr <= 0) {
      alert('Por favor, insira um tempo válido');
      document.getElementById('txtTimeWFM').focus();
      return false;
    }

    cb = Math.round((kg * this.ritmo) * hr);
    this.resultadoCalorias = 'Queimou ' + cb + ' calorias' + ', Continue !';

  }
}
