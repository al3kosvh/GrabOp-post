import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'truncate'
})
export class TruncateTextPipe implements PipeTransform {

    transform(value: string, exponent: number): string {
        if (value != null) {
            let limit = exponent < 1 ? 1 : exponent;
            let trail = (exponent > 1 && value.length < exponent) ? '' : '...';
            return value.substring(0, limit) + trail;
        }
        return value;
    }
}
