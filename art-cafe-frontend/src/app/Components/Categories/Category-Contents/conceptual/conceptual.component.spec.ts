import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptualComponent } from './conceptual.component';

describe('ConceptualComponent', () => {
  let component: ConceptualComponent;
  let fixture: ComponentFixture<ConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
