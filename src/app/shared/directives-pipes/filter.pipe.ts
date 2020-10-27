import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'appFilter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(arr: any[], resolve: (i: any, filter: any) => boolean, filter: any) {
    if (!arr) {
      return arr
    } else {
      return arr.filter((i: any) => resolve(i, filter))
    }
  }
}
