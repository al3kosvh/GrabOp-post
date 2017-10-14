import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { SignUpService } from '../../../services/signup.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class UsernameTakenValidator {

    static createValidator(signupService: SignUpService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<any> => {
            let username = control.value;
            return control
                .valueChanges
                .debounceTime(400)
                .mergeMap(value => {
                    return new Observable((observer: any) => {
                        signupService.checkUsernameExistence(username).subscribe(
                            taken => { observer.next(taken ? { usernameTaken: true } : null) },
                            error => { observer.next({ connectionError: true }) }
                        )
                    });
                }).mergeMap(stat => {
                    control.setErrors(stat);
                    return Observable.of(stat);
                });
        }
    }
}
