import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Movie } from '../movie';
import { RateMovieComponent } from '../rate-movie-dialog/rate-movie-dialog.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})

export class MovieListComponent implements OnInit {
  constructor(
    private movieApiService: ApiService,
    private dialog: RateMovieComponent
  ) { }

  displayedColumns = ['name', 'year', 'actor', 'rate'];
  dataSource: Movie[] = [];
  moviesFiltered = '';
  filteredMovies: Movie[] = [];

  get movieFilter(): string {
    return this.moviesFiltered;
  }

  set movieFilter(value: string) {
    this.moviesFiltered = value;
    this.filteredMovies = this.performFilter(value);
  }

  ngOnInit() {
    this.getMovies();
  }

  performFilter(filterBy: string): Movie[] {
    filterBy = filterBy.toLocaleLowerCase();
    this.filteredMovies = this.dataSource.filter(
      (movie: Movie) => (
        movie.name.toLowerCase().includes(filterBy) || movie.actor.toLowerCase().includes(filterBy))
    );
    return !!filterBy && this.filteredMovies.length > 0
      ? this.filteredMovies
      : this.dataSource;
  }

  getMovies() {
    this.movieApiService.fetchMovies();
    this.movieApiService.getMovies()
      .subscribe((res) => {
        this.dataSource = res;
        this.filteredMovies = res;
      })
  }

  onRowClicked(row: Movie) {
    this.dialog.openDialog(row);
  }
}