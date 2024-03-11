import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
  standalone: true
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.charAt(0);
  }

}
