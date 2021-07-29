import { Film } from './../film.model';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-films',
  templateUrl: './popular-films.component.html',
  styleUrls: ['./popular-films.component.scss'],
})
export class PopularFilmsComponent implements OnInit {
  public popularFilms: Film[] = [];
  public sliderOptions = {
    slidesPerView: 'auto',
    zoom: false,
  };
  constructor(private filmsService: FilmsService) {}

  showFilms() {
    this.filmsService.getPopularFilms().subscribe(
      (data) => {
        this.popularFilms = data.results;
      },
      (error) => console.log(error),
      () => {
        this.filmsService.buildFullImagePath(
          this.popularFilms,
          environment.baseUrl
        );
      }
    );
  }

  ngOnInit() {
    this.showFilms();
  }
}
