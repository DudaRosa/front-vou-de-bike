import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Noticia } from '../models/noticia';
import { Evento } from '../models/evento';



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

    getListEvento(): Promise<Evento[]> {
        const endpoint = `${environment.http_backend}/evento/listar`;
        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http
            .get<Evento[]>(endpoint, {
                headers
            })
            .toPromise();
    }
}