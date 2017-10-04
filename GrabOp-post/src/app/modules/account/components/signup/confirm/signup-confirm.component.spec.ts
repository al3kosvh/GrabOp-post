import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpConfirmComponent } from './signup-confirm.component';

describe('SignupConfirmComponent', () => {
  let component: SignUpConfirmComponent;
  let fixture: ComponentFixture<SignUpConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
