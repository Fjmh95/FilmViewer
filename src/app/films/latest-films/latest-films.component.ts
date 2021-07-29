import { Film } from './../film.model';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-latest-films',
  templateUrl: './latest-films.component.html',
  styleUrls: ['./latest-films.component.scss'],
})
export class LatestFilmsComponent implements OnInit {
  public latestFilms: Film[] = [];
  public sliderOptions = {
    slidesPerView: 'auto',
    zoom: false,
  };
  constructor(private filmsService: FilmsService) {}

  showFilms() {
    this.filmsService.getLatestFilms().subscribe((data) => {
      this.latestFilms = data.results;
      console.log(this.latestFilms);
      this.filmsService.buildFullImagePath(
        this.latestFilms,
        environment.baseUrl
      );
    });
  }
  ngOnInit() {
    this.showFilms();
  }
}
