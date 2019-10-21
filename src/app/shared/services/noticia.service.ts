import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Noticia } from '../models/noticia';



@Injectable()
export class NoticiaService {
    constructor(private http: HttpClient) { }

    getNoticias(): Promise<Noticia[]> {
        const endpoint = `${environment.http_backend}/noticia/listar`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Noticia[]>(endpoint, {
                headers
            })
            .toPromise();
    }

    getByDia(dia : string): Promise<Noticia[]> {
        const endpoint = `${environment.http_backend}/noticia/listar/${dia}`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Noticia[]>(endpoint, {
                headers
            })
            .toPromise();
    }
}