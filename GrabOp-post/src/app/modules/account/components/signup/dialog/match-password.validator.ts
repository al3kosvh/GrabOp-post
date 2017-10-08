import { AbstractControl } from '@angular/forms';
export class MatchPasswordValidator {

    static matchPassword(AC: AbstractControl) {
        let password = AC.get('password').value;
        let confirmPassword = AC.get('confirmPassword');
        if (confirmPassword.dirty && password != confirmPassword.value) {
            AC.get('confirmPassword').setErrors({ MatchPassword: true })
        } else {
            return null
        }
    }
}