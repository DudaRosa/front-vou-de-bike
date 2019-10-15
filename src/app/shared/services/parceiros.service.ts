import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Parceiros } from '../models/parceiros';
import { environment } from 'src/environments/environment';

@Injectable()
export class ParceirosService {
    constructor(private http: HttpClient) { }

    getAllCupom(): Promise<Parceiros[]> {
        const endpoint = `${environment.http_backend}/cupom/listar`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Parceiros[]>(endpoint, {
                headers
            })
            .toPromise();
    }

    getById(id: string): Promise<Parceiros[]> {
       

    const endpoint = `${environment.http_backend}/selecionar/${id}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Parceiros[]>(endpoint, {
                headers
            })
            .toPromise();
    }
}