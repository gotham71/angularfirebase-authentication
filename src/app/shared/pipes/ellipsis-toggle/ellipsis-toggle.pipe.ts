import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsisToggle'
})
export class EllipsisTogglePipe implements PipeTransform {

  transform(value: string, length: number): any {
    if (value.length > length) {
      const truncatedValue = value.substring(0, length) + '...';
      return {
        truncatedValue,
        fullValue: value,
        isTruncated: true
      };
    } else {
      return {
        truncatedValue: value,
        isTruncated: false
      };
    }
  }

}
