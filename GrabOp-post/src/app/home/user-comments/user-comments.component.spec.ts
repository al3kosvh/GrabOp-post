﻿import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCommentsComponent } from './user-comments.component';

describe('UserCommentsComponent', () => {
    let component: UserCommentsComponent;
    let fixture: ComponentFixture<UserCommentsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UserCommentsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UserCommentsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});
