export class Toast {
    title: string;
    message: string;
    theme?: string = 'default';
    timer?: number | (undefined | false);
    // TODO: Botão de aceitar
    // TODO: Botão de rejeitar
  }