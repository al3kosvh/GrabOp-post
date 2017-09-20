import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllianceInviteComponent } from './alliance-invite.component';

describe('AllianceInviteComponent', () => {
  let component: AllianceInviteComponent;
  let fixture: ComponentFixture<AllianceInviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllianceInviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllianceInviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
