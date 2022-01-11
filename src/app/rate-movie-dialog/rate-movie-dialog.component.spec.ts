import { TestBed } from '@angular/core/testing';
import { RateMovieComponent } from './rate-movie-dialog.component';

describe('RateMovieComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        RateMovieComponent
      ],
    }).compileComponents();
  });

  it('should create the RateMovieComponent', () => {
    const fixture = TestBed.createComponent(RateMovieComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
