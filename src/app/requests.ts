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

  historicosPais(pais: string) {
    console.log(pais);
    return this.http.get('https://api.covid19api.com/total/dayone/country/' + pais);
  }
}
