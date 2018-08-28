import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../hero';

@Pipe({
  name: 'notPureFly',
  pure: false
})
export class NotPureFlyPipe implements PipeTransform {

  transform(heros: Hero[]): any {
    return heros.filter(h => h.canFly);
  }

}
