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
  private options: object;
  public online: boolean = navigator.onLine;
  public seleccionado: string;

  constructor(private activatedRoute: ActivatedRoute, private requests: Requests, private storage: Storage) { }

  ngOnInit() {
    // this.storage.clear();
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.requests.paisesRemoto().subscribe(data => { this.options = data; }) ;
    if (this.storage.get('favorito')) {
      this.storage.get('favorito').then((data) => { this.seleccionado = data;
                                                    console.log(data + ' es el país favorito actual'); });

    }
  }

  guardarFavorito(seleccionado: string){
    this.storage.ready().then(() => { this.storage.set('favorito', seleccionado).then(() => { console.log(seleccionado + ' guardado correctamente como favorito'); }); });
  }
}

