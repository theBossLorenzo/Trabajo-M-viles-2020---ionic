import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'País favorito', url: '/favorito/fav', icon: 'compass' }
  ];
  public appPages2 = [
    { title: 'Datos Históricos', url: '/historicos/hist', icon: 'book' },
    { title: 'Nuevos Registros', url: '/nuevos/nuevo', icon: 'newspaper' },
    { title: 'Compartir', url: '/folder/social', icon: 'share' },
  ];
  constructor() {}
}
