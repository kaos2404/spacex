import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { SplashscreenComponent } from './splashscreen/splashscreen.component'

const routes: Routes = [
  {
    path: '',
    component: SplashscreenComponent
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(t => t.HomeModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
