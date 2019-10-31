import { Injectable } from "@angular/core";
import 'rxjs/add/operator/map';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http"



@Injectable()
export class MapaService {
  constructor(
    private http: HttpClient
  ) { }

  getMapa(): Observable<any> {
    const endpoint = `https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk`;

    return this.http.get(endpoint)
      .map(res => res.json());


    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // const headers = new HttpHeaders();
    // return this.http.get(endpoint, {
    //   headers
    // })
  }
}
