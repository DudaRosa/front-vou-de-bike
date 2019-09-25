import { Injectable } from "@angular/core";
import { Resolve } from "@angular/router";

@Injectable()
export class NoticiaResolver implements Resolve<any> {
  pertStatus: number[] = [1];

  constructor(
 
  ) { }

  async resolve(): Promise<any> {

    

    // const releasesPromise = this
    //   .releaseService
    //   .listReleasesShortDate()
    //   .toPromise();

   

    return Promise.all([
      // tasksPromise,

    ]);
  }
}
