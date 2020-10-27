import { Component } from '@angular/core'

import { ThemeService } from './shared/services/themes.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public theme: ThemeService) {}
}
