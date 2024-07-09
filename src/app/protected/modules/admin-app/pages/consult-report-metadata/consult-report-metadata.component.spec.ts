import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultReportMetadataComponent } from './consult-report-metadata.component';

describe('ConsultReportMetadataComponent', () => {
  let component: ConsultReportMetadataComponent;
  let fixture: ComponentFixture<ConsultReportMetadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultReportMetadataComponent]
    });
    fixture = TestBed.createComponent(ConsultReportMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
