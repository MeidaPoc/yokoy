import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css'],
})

export class AddMovieComponent {
  constructor(
    private movieApiService: ApiService,
  ) { }

  addMovie() {
    console.log("submit");
    // this.movieApiService.addMovie(movie);
  }

  getMovies() {
    this.movieApiService.getMovies();
  }
}