import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  }
) export class Requests {
  constructor(private http: HttpClient) {
  }

  paisesRemoto() {
    return this.http.get('https://api.covid19api.com/countries');
  }

  paisesLocal() {
    return this.http.get('assets/countries.json');
  }

  historicosPais(pais: string) {

    const today = new Date();
    const añoHoy = today.getFullYear();
    const mesHoy = today.getMonth() + 1;
    const diaHoy = today.getDate();

    return this.http.get
    ('https://api.covid19api.com/country/' + pais + '?from=2020-03-01T10:00:00Z&to=' + añoHoy + '-' + mesHoy + '-' + diaHoy + 'T00:00:00Z');
  }

  summary(){
     return this.http.get('https://api.covid19api.com/summary');
  }
}
