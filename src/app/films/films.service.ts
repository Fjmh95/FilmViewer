import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  constructor(private http: HttpClient) { }

getAllFilms() {
  const filmsUrl=`${environment.api}/trending/movie/week?api_key=${environment.apiKey}`;
  return this.http.get<any>(filmsUrl);
}
getFilm(id: string){
  const filmsUrl=`${environment.api}/movie/${id}?api_key=${environment.apiKey}&language=es-ES`;
  return this.http.get<any>(filmsUrl);
}
getPopularFilms(){
  const filmsUrl=`  ${environment.api}/movie/popular?api_key=${environment.apiKey}&language=es-ES&page=1`;
  return this.http.get<any>(filmsUrl);
}
getLatestFilms(){
  const filmsUrl=`  ${environment.api}/movie/now_playing?api_key=${environment.apiKey}&language=es-ES&page=1`;
  return this.http.get<any>(filmsUrl);
}
getFilmsByQuery(query: string,page: number){
  const filmsUrl=`${environment.api}/search/movie?api_key=${environment.apiKey}&query=${query}&language=es-ES&page=${page}`;
  return this.http.get<any>(filmsUrl);
}
orderFilms(films,category) {
  films.sort((a, b) => b[category] - a[category]);
}
buildFullImagePath(films,baseUrl){
  console.log(baseUrl,films);
  for (const film of films) {
  if (!film.fullImagePath && film.poster_path) {
    film.fullImagePath = baseUrl + 'w342' + film.poster_path;
  } else if (!film.poster_path) {
    film.fullImagePath = 'assets/descarga.png';
  }
}

}
}
