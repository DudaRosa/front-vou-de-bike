import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";
import { ParceirosService } from 'src/app/shared/services/parceiros.service';

@Injectable()
export class ParceiroResolver implements Resolve<any> {
  pertStatus: number[] = [1];

  constructor(
  private parceiroService: ParceirosService
  ) { }

  async resolve(): Promise<any> {

    

    const parceiroPromise = this
      .parceiroService
      .getAllCupom();

   

    return Promise.all([
      parceiroPromise,

    ]);
  }
}
