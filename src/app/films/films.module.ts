import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FilmsPageRoutingModule } from './films-routing.module';
import { FilmsPage } from './films.page';
import { PopularFilmsComponent } from './popular-films/popular-films.component';
import { LatestFilmsComponent } from './latest-films/latest-films.component';
import { HeaderFilmsComponent } from './header-films/header-films.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FilmsPageRoutingModule,
  ],
  exports:[HeaderFilmsComponent],
  declarations: [FilmsPage,PopularFilmsComponent,LatestFilmsComponent,HeaderFilmsComponent]
})
export class FilmsPageModule {}
