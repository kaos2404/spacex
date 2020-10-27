import { Component } from '@angular/core'

import { HttpIntercepter } from '../shared/services/http-interceptor.service'

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public sideNav: boolean
  public bannerDown: boolean
  public breadcrumbIcon: string

  constructor(public interceptor: HttpIntercepter) {
    this.bannerDown = false
  }

  public toggleNavBar(event: Event) {
    event.stopPropagation()
    this.sideNav = !this.sideNav
  }

  public closeNavBar(isClose: boolean) {
    this.sideNav = false
  }
}
