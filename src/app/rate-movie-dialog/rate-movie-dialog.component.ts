import { Component, Inject, Injectable, Optional } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Movie } from '../movie';

@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'rate-movie-dialog.component',
  templateUrl: 'rate-movie-dialog.component.html',
  styleUrls: ['./rate-movie-dialog.component.css'],

})
export class RateMovieComponent {
  constructor(
    public dialog: MatDialog,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Movie,
  ) { }
  starRating = 0; 

  openDialog(row: Movie) {
    this.dialog.open(RateMovieDialog, { data: row });
    this.starRating = row.rate;
  }
}

@Component({
  selector: 'rate-movie-dialog.component',
  templateUrl: 'rate-movie-dialog.component.html',
  styleUrls: ['./rate-movie-dialog.component.css'],
})
export class RateMovieDialog {
  constructor(
    public dialog: MatDialogRef<MatDialog>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: Movie
  ) { }

  starRating = this.data.rate; 
}