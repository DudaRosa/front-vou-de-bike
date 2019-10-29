import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Clima } from '../models/clima';

@Injectable()
export class ClimaService {
    constructor(private http: HttpClient) { }

    getListClima(): Promise<Clima[]> {
        const endpoint = `${environment.http_backend}/clima/listar`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Clima[]>(endpoint, {
                headers
            })
            .toPromise();
    }

 
}