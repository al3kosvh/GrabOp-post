﻿import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupButtonComponent } from './signup-button.component';

describe('SignupButtonComponent', () => {
    let component: SignupButtonComponent;
    let fixture: ComponentFixture<SignupButtonComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [SignupButtonComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(SignupButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});