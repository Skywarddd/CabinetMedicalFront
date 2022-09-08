import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDeplacementComponent } from './new-deplacement.component';

describe('NewDeplacementComponent', () => {
  let component: NewDeplacementComponent;
  let fixture: ComponentFixture<NewDeplacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewDeplacementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewDeplacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
