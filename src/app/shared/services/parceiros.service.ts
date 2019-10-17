import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Cupom } from '../models/cupom';

@Injectable()
export class ParceirosService {
    constructor(private http: HttpClient) { }

    getAllCupom(): Promise<Cupom[]> {
        const endpoint = `${environment.http_backend}/cupom/listar`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Cupom[]>(endpoint, {
                headers
            })
            .toPromise();
    }

    getById(id: string): Promise<Cupom[]> {
       

    const endpoint = `${environment.http_backend}/selecionar/${id}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Cupom[]>(endpoint, {
                headers
            })
            .toPromise();
    }
}