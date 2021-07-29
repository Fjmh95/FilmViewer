# FilmViewer

Para iniciarlo crear el archivo environment.ts con el mismo formato que environment.prod.ts y poner vuestra apikey de https://developers.themoviedb.org/3

Por ejemplo environment.ts:

``` js
export const environment = {
  production: false,
  baseUrl:'https://image.tmdb.org/t/p/',
  api :'https://api.themoviedb.org/3',
  apiKey:'yourapikey',
};
```
