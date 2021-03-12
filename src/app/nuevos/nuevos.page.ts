import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Requests } from 'src/app/requests';

@Component({
  selector: 'app-nuevos',
  templateUrl: './nuevos.page.html',
  styleUrls: ['./nuevos.page.scss'],
})
export class NuevosPage implements OnInit {
  public folder: string;
  public online: boolean = navigator.onLine;
  private result: any;
  private resultado: Object;

  private favorito: string;

  constructor(private activatedRoute: ActivatedRoute, private requests: Requests, private storage: Storage) {
  }

  ngOnInit() {

    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.storage.get('favorito').then((data) => {
      this.favorito = data;
      this.requests.summary().subscribe(data2 => {
        this.result = data2;
        this.result = this.result.Countries;
        this.resultado = this.result.find(i => {
        return i.Country === data; });
        console.log('Resultado: ', this.resultado);
      });
    });
  }
}
