import { Injectable, TemplateRef  } from '@angular/core';
import { Toast } from '../../../shared/models/toast';
 
  @Injectable({
    providedIn: 'root'
  })
  export class ToastService {
    toasts: Toast[] = [];
  
    default(message: string, options: ToastOptions = { timer: 4 }): Toast {
      return this.addToast(message, 'default', options);
    }
  
    success(message: string, options: ToastOptions = { timer: 4 }): Toast {
      return this.addToast(message, 'success', options);
    }
  
    warning(message: string, options: ToastOptions = { timer: 4 }): Toast {
      return this.addToast(message, 'warning', options);
    }
  
    error(message: string, options: ToastOptions = { timer: 4 }): Toast {
      return this.addToast(message, 'error', options);
    }
  
    removeToast(toast: Toast): void {
      const index = this.toasts.indexOf(toast);
      if (index >= 0) {
        this.toasts.splice(index, 1);
      }
    }
  
    showToast(toast: Toast): Toast {
      return this.addToast(toast.message, toast.theme, {
        title: toast.title,
        timer: toast.timer
      });
    }
  
    private addToast(message: string, theme: string, options?: ToastOptions): Toast {
      const toast: Toast = {
        title: options.title,
        message,
        theme,
        timer: options === undefined ? false : options.timer
      };
      this.toasts.push(toast);
      return toast;
    }
  }
  
  interface ToastOptions {
    title?: string;
    timer?: number | (undefined | false);
  }
