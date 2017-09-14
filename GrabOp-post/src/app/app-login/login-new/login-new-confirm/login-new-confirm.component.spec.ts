import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewConfirmComponent } from './login-new-confirm.component';

describe('LoginNewConfirmComponent', () => {
  let component: LoginNewConfirmComponent;
  let fixture: ComponentFixture<LoginNewConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNewConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
