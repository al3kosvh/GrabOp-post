import { AbstractControl, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { SignUpService } from '../../../services/signup.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class EmailTakenValidator {

    static createValidator(signupService: SignUpService): AsyncValidatorFn {
        return (control: AbstractControl): Observable<any> => {
            let email = control.value;
            return control
                .valueChanges
                .debounceTime(400)
                .mergeMap(value => {
                    return new Observable((observer: any) => {
                        signupService.verifyEmail(email).subscribe(
                            value => { observer.next(value ? { emailTaken: true } : null) },
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