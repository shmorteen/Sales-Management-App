import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsalesComponent } from './reportsales.component';

describe('ReportsalesComponent', () => {
  let component: ReportsalesComponent;
  let fixture: ComponentFixture<ReportsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
