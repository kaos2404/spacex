import { Injectable, NgModule } from '@angular/core'
import { Resolve, RouterModule } from '@angular/router'
import { API } from 'src/app/shared/api.constants'
import { HttpService } from 'src/app/shared/services/http.service'
import { SharedModule } from 'src/app/shared/shared.module'

import { NewsComponent } from './news.component'
import { News } from './news.model'

@Injectable()
export class NewsResolver implements Resolve<News[]> {
  constructor(private http: HttpService) {}
  public resolve() {
    return this.http.get<News[]>(API.news)
  }
}

@NgModule({
  declarations: [NewsComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: NewsComponent,
        resolve: {
          news: NewsResolver
        }
      }
    ])
  ],
  providers: [NewsResolver]
})
export class NewsModule {}
