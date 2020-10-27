import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpIntercepter } from './shared/services/http-interceptor.service'
import { HttpService } from './shared/services/http.service'
import { ThemeService } from './shared/services/themes.service'
import { SplashscreenComponent } from './splashscreen/splashscreen.component'

@NgModule({
  declarations: [AppComponent, SplashscreenComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [
    ThemeService,
    HttpService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpIntercepter, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
