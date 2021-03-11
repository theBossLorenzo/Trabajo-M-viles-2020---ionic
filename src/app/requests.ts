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
    return this.http.get('https://api.covid19api.com/country/' + pais + '?from=2021-03-10T00:00:00Z&to=2021-03-11T00:00:00Z');
    console.log('https://api.covid19api.com/total/dayone/country/' + pais);
    // return this.http.get('https://api.covid19api.com/total/dayone/country/' + pais);
  }
}
