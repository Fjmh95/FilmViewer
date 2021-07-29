import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchFilmsPageRoutingModule } from './search-films-routing.module';
import { SearchFilmsPage } from './search-films.page';
import { FilmsPageModule } from '../films.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchFilmsPageRoutingModule,
    FilmsPageModule
  ],
  declarations: [SearchFilmsPage]
})
export class SearchFilmsPageModule {}
