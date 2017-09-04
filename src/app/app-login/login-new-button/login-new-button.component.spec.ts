import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNewButtonComponent } from './login-new-button.component';

describe('LoginNewButtonComponent', () => {
  let component: LoginNewButtonComponent;
  let fixture: ComponentFixture<LoginNewButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNewButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNewButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
