import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Requests } from 'src/app/requests';

@Component({
  selector: 'app-historicos',
  templateUrl: './historicos.page.html',
  styleUrls: ['./historicos.page.scss'],
})
export class HistoricosPage implements OnInit {
  public folder: string;
  public online: boolean = navigator.onLine;
  public result: any;
  public favorito: string;

  constructor(private activatedRoute: ActivatedRoute, private requests: Requests, private storage: Storage) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.storage.get('favorito').then((data) => { this.favorito = data;
                                                  this.requests.historicosPais(data).subscribe(data2 => {
                                                    this.result = data2;
                                                    this.result = this.result[this.result.length - 1]; }) ;
    });
  }

}
