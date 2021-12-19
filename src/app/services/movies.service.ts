import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  getMovies(){
    return this.http.get("https://api.themoviedb.org/3/movie/upcoming?api_key=81ab449fa5769a5c8f649814cd599892")
  }
}
