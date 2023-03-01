import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllArtsComponent } from './all-arts.component';

describe('AllArtsComponent', () => {
  let component: AllArtsComponent;
  let fixture: ComponentFixture<AllArtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllArtsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
