import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInfirmierComponent } from './new-infirmier.component';

describe('NewInfirmierComponent', () => {
  let component: NewInfirmierComponent;
  let fixture: ComponentFixture<NewInfirmierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewInfirmierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewInfirmierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
