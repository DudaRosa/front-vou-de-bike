import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mapa } from '../models/mapa';
import { Local } from '../models/local';


@Injectable()
export class MapaService {
  constructor(
    private http: HttpClient
  ) { }

  getRotaMapa(origem: string, destino: string): Promise<Mapa> {
    const endpoint = `${environment.http_backend}/mapa/rota/${origem}/${destino}`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .get<Mapa>(endpoint, {
        headers
      })
      .toPromise();
  }

  getLocalMapa(origem: string): Promise<Local> {
    const endpoint = `${environment.http_backend}/mapa/local/${origem}`;
    // https://maps.googleapis.com/maps/api/geocode/json?address=60+comantante%20bras%20dias%20de%20aguiar+Brasil+SP&key=AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .get<Local>(endpoint, {
        headers
      })
      .toPromise();
  }

  // getTeste2(){
  //   fetch('https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk/')
  //   .then(function(response) {
  //     return response.json();
  //   })
  //   .then(function(json) {
  //     console.log("teste da dudaaa do json >> ",JSON.stringify(json.results));
  //   })
  // }
}
