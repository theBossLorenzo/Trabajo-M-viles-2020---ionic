import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
  }
) export class Requests {
  constructor(private http: HttpClient) {}

    paisesLocal() {
      return this.http.get('src/assets/countries.json');
    }

    paisesRemoto() {
      return this.http.get('https://api.covid19api.com/countries');
    }
}
