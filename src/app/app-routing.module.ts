import {
  NgModule
} from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes
} from '@angular/router';

const routes: Routes = [{
    path: '',
    redirectTo: 'films',
    pathMatch: 'full'
  },
  {
    path: '',
      loadChildren: () => import('./films/films.module').then(m => m.FilmsPageModule)
    },
    {
      path: 'films/:filmId',
      loadChildren: () => import('./films/film-detail/film-detail.module').then( m => m.FilmDetailPageModule)
    },
    {
      path: 'search/:searchId',
      loadChildren: () => import('./films/search-films/search-films.module').then( m => m.SearchFilmsPageModule)
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
