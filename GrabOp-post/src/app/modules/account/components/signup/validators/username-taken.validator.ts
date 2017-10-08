import { AbstractControl } from '@angular/forms';
import { SignUpService } from '../../../services/signup.service'

export class UsernameTakenValidator {

    static createValidator(signupService: SignUpService) {
        return (control: AbstractControl) => {
            return signupService.verifyUsername(control.value).map(res => {
                return res ? null : { usernameTaken: true };
            });
        }
    }
}