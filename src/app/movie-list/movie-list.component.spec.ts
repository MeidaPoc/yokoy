import { TestBed } from '@angular/core/testing';
import { MovieListComponent } from './movie-list.component';

describe('MovieListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MovieListComponent
      ],
    }).compileComponents();
  });

  it('should create the MovieListComponent', () => {
    const fixture = TestBed.createComponent(MovieListComponent);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
