import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryDetailsScreenComponent } from './country-details-screen.component';

describe('CountryDetailsScreenComponent', () => {
  let component: CountryDetailsScreenComponent;
  let fixture: ComponentFixture<CountryDetailsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryDetailsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryDetailsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
