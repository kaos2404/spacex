import { formatDate } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { FormControl } from '@angular/forms'
import { MatSort } from '@angular/material/sort'
import { ActivatedRoute } from '@angular/router'
import { filter, map } from 'rxjs/operators'

import { News } from './news.model'

@Component({
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  public news: News[]
  public sort: MatSort
  public filter: FormControl
  public filterFunc: (arr: News[], t: string) => News[]
  constructor(private route: ActivatedRoute) {
    this.filter = new FormControl(null)

    this.filterFunc = (arr: News[], t: string) =>
      arr && t
        ? arr.filter(
            i =>
              (i.flight_number && i.flight_number.toString().includes(t)) ||
              (i.title && i.title.toLowerCase().includes(t.toLowerCase())) ||
              (i.details && i.details.toLowerCase().includes(t.toLowerCase())) ||
              (i.event_date_utc &&
                formatDate(i.event_date_utc, 'MM/dd/yyyy, HH:mm', 'en').includes(
                  t.toLowerCase()
                ))
          )
        : arr
  }

  ngOnInit() {
    this.route.data
      .pipe(
        filter(data => !!data.news),
        map(data => data.news)
      )
      .subscribe(data => (this.news = data))
  }
}
