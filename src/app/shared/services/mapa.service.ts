import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Mapa } from '../models/mapa';


@Injectable()
export class MapaService {
  constructor(
    private http: HttpClient
  ) { }

  getRotaMapa(): Promise<Mapa[]> {
    const endpoint = `${environment.http_backend}/mapa/listar`;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .get<Mapa[]>(endpoint, {
        headers
      })
      .toPromise();
  }

  getLocalMapa(): Promise<Mapa[]> {
    const endpoint = `${environment.http_backend}/mapa/listar`;
    // https://maps.googleapis.com/maps/api/geocode/json?address=60+comantante%20bras%20dias%20de%20aguiar+Brasil+SP&key=AIzaSyCpj2qNzlBwvWbYFnUBHoxXg6sacPkgOWk

    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http
      .get<Mapa[]>(endpoint, {
        headers
      })
      .toPromise();
  }
}
