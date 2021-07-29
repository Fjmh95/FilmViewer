import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchFilmsPage } from './search-films.page';

const routes: Routes = [
  {
    path: '',
    component: SearchFilmsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchFilmsPageRoutingModule {}
