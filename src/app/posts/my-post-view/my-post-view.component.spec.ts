import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPostViewComponent } from './my-post-view.component';

describe('MyPostViewComponent', () => {
  let component: MyPostViewComponent;
  let fixture: ComponentFixture<MyPostViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPostViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPostViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
