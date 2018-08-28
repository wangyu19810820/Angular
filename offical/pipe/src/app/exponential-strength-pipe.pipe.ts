import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrengthPipe'
})
export class ExponentialStrengthPipePipe implements PipeTransform {

  transform(value: number, exponent: string): any {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exponent) ? 1 : exponent);
  }

}
