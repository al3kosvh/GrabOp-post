import { AbstractControl } from '@angular/forms';
export class MatchPasswordValidator {

    static matchPassword(control: AbstractControl) {
        let password = control.get('password').value;
        let confirmPassword = control.get('confirmPassword');
        if (confirmPassword.dirty && password != confirmPassword.value) {
            control.get('confirmPassword').setErrors({ matchPassword: true });
        } else {
            return null;
        }
    }
}