import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportImageComponent } from './support-image.component';

describe('SupportImageComponent', () => {
  let component: SupportImageComponent;
  let fixture: ComponentFixture<SupportImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupportImageComponent]
    });
    fixture = TestBed.createComponent(SupportImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
