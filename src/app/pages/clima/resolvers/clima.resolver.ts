import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { NoticiaService } from 'src/app/shared/services/noticia.service';
import { ClimaService } from 'src/app/shared/services/clima.service';

@Injectable()
export class ClimaResolver implements Resolve<any> {
 
  constructor(
    private climaService: ClimaService
  ) { }

  async resolve(): Promise<any> {



    const climaPromise = this
      .climaService
      .getListClima();

    return Promise.all([
      climaPromise,


    ]);
  }
}
