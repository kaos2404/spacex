import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'appTransform',
  pure: true
})
export class AppTransformPipe implements PipeTransform {
  transform(value: any, param: any, transform: (value: any, param: any) => any) {
    return value && param ? transform(value, param) : value
  }
}
