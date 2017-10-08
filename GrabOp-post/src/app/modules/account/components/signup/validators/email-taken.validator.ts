import { AbstractControl } from '@angular/forms';
import { SignUpService } from '../../../services/signup.service'

export class EmailTakenValidator {

    static createValidator(signupService: SignUpService) {
        return (control: AbstractControl) => {
            return signupService.verifyEmail(control.value).map(res => {
                return res ? null : { emailTaken: true };
            });
        }
    }
}