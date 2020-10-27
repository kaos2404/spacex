import { Injectable } from '@angular/core'
import { DomSanitizer } from '@angular/platform-browser'

@Injectable()
export class ThemeService {
  public cssUrl
  public dark: boolean
  constructor(private domSanitzier: DomSanitizer) {
    this.cssUrl = this.domSanitzier.bypassSecurityTrustResourceUrl('assets/css/light.css')
  }
  public toggleTheme() {
    this.dark = !this.dark
    this.cssUrl = this.domSanitzier.bypassSecurityTrustResourceUrl(
      this.dark ? 'assets/css/dark.css' : 'assets/css/light.css'
    )
  }
}
