import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster.component';
import { ToastComponent } from './components/toast/toast.component';
import { TimerComponent } from './components/timer/timer.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ToasterComponent, ToastComponent, TimerComponent],
  exports: [ToasterComponent]
})
export class ToasterModule {}
