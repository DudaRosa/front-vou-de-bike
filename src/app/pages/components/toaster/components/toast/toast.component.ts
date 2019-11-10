import { Component, Input, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToastService } from 'src/app/pages/components/toaster/toast.service';
import { Toast } from 'src/app/shared/models/toast';


const ANIMATION_OPTIONS = '400ms cubic-bezier(.25,.75,.5,1.25)';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('slide', [
      transition('void => *', [
        // 370px é a soma do max-width do .toast + 20px do right do .toaster
        style({ transform: 'translateX(370px)' }),
        animate(ANIMATION_OPTIONS, style({ transform: 'translateX(0)' }))
      ]),

      transition('* => void', [animate(ANIMATION_OPTIONS, style({ transform: 'translateX(370px)' }))])
    ])
  ]
})
export class ToastComponent implements OnInit {
  @Input() toast: Toast;

  canRunTimer = false;
  toggleTimerRunStateSubject: Subject<boolean>;

  constructor(private toasterService: ToastService) {}

  ngOnInit() {
    if (this.toast.timer) {
      this.toggleTimerRunStateSubject = new Subject<boolean>();
    }
  }

  slideDone({ fromState }: { fromState: string }) {
    if (fromState === 'void') {
      this.canRunTimer = true;
    }
  }

  onClick() {
    this.dismiss();
  }

  onMouseEnter() {
    if (this.toggleTimerRunStateSubject) {
      this.toggleTimerRunStateSubject.next(false);
    }
  }

  onMouseLeave() {
    if (this.toggleTimerRunStateSubject) {
      this.toggleTimerRunStateSubject.next(true);
    }
  }

  onTimerEnd() {
    this.dismiss();
  }

  dismiss() {
    this.toasterService.removeToast(this.toast);
  }
}
