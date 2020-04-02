import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordPipe'
})
export class PasswordPipePipe implements PipeTransform {

  transform(value: string, activar: boolean): string {
    if (activar) {
      let valueArr = value.split('')
      return valueArr.map( item => '*' ).join('')
    } else return value;
  }
}
