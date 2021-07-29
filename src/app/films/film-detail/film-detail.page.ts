import { FilmDetail } from './film-detail.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Film } from '../film.model';
import { FilmsService } from '../films.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.page.html',
  styleUrls: ['./film-detail.page.scss'],
})
export class FilmDetailPage implements OnInit {
  loadedFilm: FilmDetail={};
  filmId: string;
  constructor(private activatedRoute: ActivatedRoute , private filmsService: FilmsService) { }




  showFilm() {
    this.activatedRoute.paramMap.subscribe(params=>{
      this.filmId=params.get('filmId');
    });
    this.filmsService.getFilm(this.filmId).subscribe(
         (data: FilmDetail) => {
           this.loadedFilm=data;
           this.loadedFilm.poster_path=environment.baseUrl+'w342'+this.loadedFilm.poster_path;
        },
         (error) => { console.log(error); },
         () => { console.log(this.loadedFilm); }
         );
       };
  ngOnInit() {
    this.showFilm();
      }
  }
