import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { HomeComponent } from './home.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: '',
            redirectTo: 'launches'
          },
          {
            path: 'news',
            loadChildren: () => import('./news/news.module').then(t => t.NewsModule)
          },
          {
            path: 'launches',
            loadChildren: () =>
              import('./launches/launches.module').then(t => t.LaunchesModule)
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
