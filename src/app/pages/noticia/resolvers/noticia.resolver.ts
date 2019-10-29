import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { NoticiaService } from 'src/app/shared/services/noticia.service';

@Injectable()
export class NoticiaResolver implements Resolve<any> {
  pertStatus: number[] = [1];

  constructor(
    private noticiaService: NoticiaService
  ) { }

  async resolve(): Promise<any> {



    const noticiaPromise = this
      .noticiaService
      .getNoticias();

      const eventoPromise = this
      .noticiaService
      .getListEvento();



    return Promise.all([
      noticiaPromise,
      eventoPromise

    ]);
  }
}
