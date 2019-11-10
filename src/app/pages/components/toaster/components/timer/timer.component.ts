import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit, OnDestroy {
  // Necessário, pois o animation não restarta após definir
  // somente o duration. Só restarta após definir o name
  @Input('run') start: boolean;
  isRunning: boolean = false;
  @Input('duration') duration: number;
  @Input() toggleRunStateSubject: Subject<boolean>;
  @Output('timerEnd') onTimerEndEvent: EventEmitter<AnimationEvent> = new EventEmitter();

  ngOnInit() {
    this.toggleRunStateSubject.subscribe(run => {
      this.isRunning = run;
    });
    this.isRunning = true;
  }

  ngOnDestroy() {
    this.toggleRunStateSubject.unsubscribe();
  }

  onAnimationEnd(event: AnimationEvent) {
    this.onTimerEndEvent.emit(event);
  }
}
