import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class MapaService {
  constructor(
    private http: HttpClient
  ) { }

  getMapa(): any {
    const endpoint = `https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk`;
    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const headers = new HttpHeaders();
    return this.http.get(endpoint, {
      headers
    })
  }
}
