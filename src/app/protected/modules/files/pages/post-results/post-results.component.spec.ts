import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostResultsComponent } from './post-results.component';

describe('PostResultsComponent', () => {
  let component: PostResultsComponent;
  let fixture: ComponentFixture<PostResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostResultsComponent]
    });
    fixture = TestBed.createComponent(PostResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
