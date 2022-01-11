import { TestBed } from '@angular/core/testing';
import { AddMovieComponent } from './add-movie.component';

describe('AddMovieComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddMovieComponent
      ],
    }).compileComponents();
  });

  it('should create the AddMovieComponent', () => {
    const fixture = TestBed.createComponent(AddMovieComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
