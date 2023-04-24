import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignMeUpComponent } from './sign-me-up.component';

describe('SignMeUpComponent', () => {
  let component: SignMeUpComponent;
  let fixture: ComponentFixture<SignMeUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignMeUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignMeUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
