import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { environment } from 'src/environments/environment';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private movies: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);

  constructor(private httpClient: HttpClient) { }

  fetchMovies() {
    this.httpClient.get<Movie[]>(`${environment.baseURL}movies.json`)
      .subscribe(receivedItems => this.movies.next(receivedItems));
  }

  getMovies(): Observable<Movie[]> {
    return this.movies.asObservable();
  }

  addMovie(movie: Movie): void {
    this.movies.next(this.movies.getValue().concat([movie]));
  }
}
