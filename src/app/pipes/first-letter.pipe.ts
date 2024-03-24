import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetter',
  standalone: true
})
export class FirstLetterPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let cleanString: string = value.replace(/^\s+/, '');
    return cleanString.charAt(0);
  }

}
