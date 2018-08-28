import { Pipe, PipeTransform } from '@angular/core';
import {Hero} from '../hero';

@Pipe({
  name: 'fly'
})
export class FlyPipe implements PipeTransform {

  transform(heroes: Hero[]): any {
    return heroes.filter(h => h.canFly);
  }

}
