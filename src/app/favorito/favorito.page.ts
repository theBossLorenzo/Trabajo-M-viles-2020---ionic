import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requests } from 'src/app/requests';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {
  public folder: string;
  public options: any;
  public online: boolean = navigator.onLine;
  public seleccionado: string;
  public favorito: string;

  constructor(private activatedRoute: ActivatedRoute, private requests: Requests, private storage: Storage) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.online){
      this.requests.paisesRemoto().subscribe(data => {
      this.options = data;
      this.options = this.options.sort((a, b) => a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0);
    }) ; }
    else {
          this.requests.paisesLocal().subscribe(data => {
          this.options = data;
          this.options = this.options.sort((a, b) => a.Country < b.Country ? -1 : a.Country > b.Country ? 1 : 0);
      }) ;
    }

    if (this.storage.get('favorito')) {
      this.storage.get('favorito').then((data) => { this.favorito = data; });
    }
  }

  guardarFavorito(seleccionado: string){
    this.storage.ready().then(() => { this.storage.set('favorito', seleccionado).then(() => { this.favorito = seleccionado; }); });
    alert(seleccionado + ' es tu nuevo país favorito');
  }

  eliminarFavorito() {
    this.seleccionado = null;
    this.favorito = null;
    this.storage.clear();
  }

}

