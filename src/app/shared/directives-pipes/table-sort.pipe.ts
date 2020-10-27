import { Pipe, PipeTransform } from '@angular/core'
import { Sort } from '@angular/material/sort'

@Pipe({
  name: 'appTableSort',
  pure: true
})
export class AppTableSortPipe implements PipeTransform {
  transform(arr: any[], sort: Sort) {
    if (arr && sort) {
      const asc = sort.direction == 'asc'
      return [
        ...arr.sort((a, b) =>
          this.compare(this.id(a, sort.active), this.id(b, sort.active), asc)
        )
      ]
    } else {
      return arr
    }
  }

  public id(obj, key: string) {
    let t = obj
    if (key.indexOf('.') > -1) {
      const keys = key.split('.')
      for (const i in keys) {
        if (t.hasOwnProperty(keys[i])) {
          t = t[keys[i]]
        } else {
          return null
        }
      }
    }
    return t[key]
  }

  public compare(a: number | string, b: number | string, asc: boolean) {
    if (typeof a == 'string' && typeof b == 'string') {
      return (a.toLowerCase() < b.toLowerCase() ? -1 : 1) * (asc ? 1 : -1)
    }
    return (a < b ? -1 : 1) * (asc ? 1 : -1)
  }
}
