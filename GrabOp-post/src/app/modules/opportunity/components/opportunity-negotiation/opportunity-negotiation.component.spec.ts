import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpportunityNegotiationComponent } from './opportunity-negotiation.component';

describe('OpportunityNegotiationComponent', () => {
  let component: OpportunityNegotiationComponent;
  let fixture: ComponentFixture<OpportunityNegotiationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpportunityNegotiationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpportunityNegotiationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
