import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { map } from "rxjs/operators"
import { environment } from 'src/environments/environment';


@Injectable()
export class MapaService {
  constructor(
    private http: HttpClient
  ) { }

  getMapa(): Observable<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');



    return this.http.get<any>(environment.http_url_mapa_google,{headers, withCredentials: environment.withCredentials})
    .pipe(map((res: any) => res.json()));
      


    // const headers = new HttpHeaders().set('Content-Type', 'application/json');
    // const headers = new HttpHeaders();
    // return this.http.get(endpoint, {
    //   headers
    // })
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
