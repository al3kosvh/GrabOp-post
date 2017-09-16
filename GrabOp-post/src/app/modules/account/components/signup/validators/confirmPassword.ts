export function confirmPassword(person, ctrl) {

    const valid = person.password && person.password === ctrl.value;

    return valid ? null : {
        confirmPassword: false
    };

}