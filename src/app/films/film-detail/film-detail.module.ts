import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { FilmsPageModule } from '../films.module';
import { FilmDetailPageRoutingModule } from './film-detail-routing.module';
import { FilmsPageRoutingModule } from '../films-routing.module';
import { FilmDetailPage } from './film-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FilmDetailPageRoutingModule,
    FilmsPageRoutingModule,
    FilmsPageModule
  ],
  declarations: [FilmDetailPage]
})
export class FilmDetailPageModule {}
