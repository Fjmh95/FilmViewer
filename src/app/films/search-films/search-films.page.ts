import { SearchedFilm } from './search-films.model';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../films.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-search-films',
  templateUrl: './search-films.page.html',
  styleUrls: ['./search-films.page.scss'],
})
export class SearchFilmsPage implements OnInit {
  maximunPages: number;
  searchId = '';
  searchedFilms: SearchedFilm[] = [];
  baseUrl = environment.baseUrl;
  constructor(
    private filmsService: FilmsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.getParams();
    this.showFilm();
  }

  getParams() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.searchId = params.get('searchId');
      console.log(this.searchId);
    });
  }
  showFilm() {
    this.filmsService.getFilmsByQuery(this.searchId, 1).subscribe(
      (data: any) => {
        this.maximunPages = data.total_pages;
      },
      (error) => console.log(error),
      () => {
        for (let i = 1; i <= this.maximunPages; i++) {
          this.filmsService.getFilmsByQuery(this.searchId, i).subscribe(
            (data: any) => {
              this.searchedFilms = this.searchedFilms.concat(data.results);
            },
            (error) => console.log(error),
            () => {
              if (i === this.maximunPages) {
                this.filmsService.buildFullImagePath(this.searchedFilms,this.baseUrl);
                console.log('ordenar');
                this.filmsService.orderFilms(this.searchedFilms,'popularity');
              }
            }
          );
        }
      }
    );
  }
}
