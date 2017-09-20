import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[appCheckEmail]'
})
export class CheckEmailDirective {

    focus = false;

    @HostListener('focus')
    onFocus() {
        this.focus = true;
    }

    @HostListener('blur')
    onBlur() {
        this.focus = false;
        console.log('onBlur');
    }

}
