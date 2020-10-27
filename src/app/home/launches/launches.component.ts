import { formatDate } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatSort } from '@angular/material/sort'
import { ActivatedRoute } from '@angular/router'
import { filter, map } from 'rxjs/operators'

import { Launch } from './launches.model'

@Component({
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {
  public launches: Launch[]
  public sort: MatSort
  public filter: FormControl
  public filterFunc: (arr: Launch[], t: string) => Launch[]

  constructor(private route: ActivatedRoute) {
    this.filter = new FormControl(null)

    this.filterFunc = (arr: Launch[], t: string) =>
      arr && t
        ? arr.filter(
            i =>
              (i.orbit_params.epoch &&
                formatDate(i.orbit_params.epoch, 'MM/dd/yyyy, HH:mm', 'en').includes(
                  t.toLowerCase()
                )) ||
              (i.customers &&
                i.customers.find(i => i.toLowerCase().includes(t.toLowerCase()))) ||
              (i.payload_id && i.payload_id.toLowerCase().includes(t.toLowerCase())) ||
              (i.nationality && i.nationality.toLowerCase().includes(t.toLowerCase())) ||
              (i.manufacturer &&
                i.manufacturer.toLowerCase().includes(t.toLowerCase())) ||
              (i.payload_type &&
                i.payload_type.toLowerCase().includes(t.toLowerCase())) ||
              (i.orbit && i.orbit.toLowerCase().includes(t.toLowerCase()))
          )
        : arr
  }

  ngOnInit() {
    this.route.data
      .pipe(
        filter(data => !!data.launches),
        map(data => data.launches)
      )
      .subscribe(data => (this.launches = data))
  }
}
