import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies:any = [];

  constructor(private mservice:MoviesService) { }

  ngOnInit(): void {
    this.mservice.getMovies().subscribe((res:any)=>{
       this.movies = res.results;
       console.log(this.movies);
       
    })
  }

}
