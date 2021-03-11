import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Requests } from 'src/app/requests';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {
  public folder: string;

  constructor(private activatedRoute: ActivatedRoute, private requests: Requests) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
    this.requests.paisesRemoto().subscribe(data => {
      console.log('Paises remoto:');
      console.log(data);
    });
  }

}
