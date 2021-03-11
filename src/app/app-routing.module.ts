import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'favorito/fav',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'favorito/:id',
    loadChildren: () => import('./favorito/favorito.module').then( m => m.FavoritoPageModule)
  },
  {
    path: 'historicos/:id',
    loadChildren: () => import('./historicos/historicos.module').then( m => m.HistoricosPageModule)
  },
  {
    path: 'nuevos/:id',
    loadChildren: () => import('./nuevos/nuevos.module').then( m => m.NuevosPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
