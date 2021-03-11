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
  public result: object;
  public seleccionado: string;

  constructor(private activatedRoute: ActivatedRoute, private requests: Requests, private storage: Storage) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.storage.get('favorito')) { this.storage.get('favorito').then((data) => { this.requests.historicosPais(data).subscribe(data2 => { this.result = data2; }) ; }); }
  }

}
