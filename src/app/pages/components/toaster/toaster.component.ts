import { Component } from '@angular/core';

import { trigger, transition, animateChild, query } from '@angular/animations';
import { ToastService } from 'src/app/pages/components/toaster/toast.service';
import { Toast } from 'src/app/shared/models/toast';


@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  animations: [
    // Solução para componente filho executar transição de saída
    // antes de ser removido do DOM
    // https://github.com/angular/angular/issues/23302
    trigger('animationChild', [transition('* => void', [query('@*', [animateChild()], { optional: true })])])
  ]
})
export class ToasterComponent {
  constructor(private toasterService: ToastService) {}

  get toasts(): Toast[] {
    return this.toasterService.toasts;
  }
}
