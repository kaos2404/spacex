import { Component, EventEmitter, Input, Output } from '@angular/core'

import { ThemeService } from '../../services/themes.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() public close: EventEmitter<boolean>
  @Input() public state: boolean
  @Input() public bannerDown: boolean
  public install: any

  constructor(public theme: ThemeService) {
    this.close = new EventEmitter<boolean>()
  }

  public onClickedOutside(event: Event) {
    this.close.emit(true)
  }

  public onLinkClicked(event: Event) {
    this.close.emit(true)
  }
}
