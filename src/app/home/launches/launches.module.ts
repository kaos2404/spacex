import { Injectable, NgModule } from '@angular/core'
import { Resolve, RouterModule } from '@angular/router'
import { map } from 'rxjs/operators'
import { API } from 'src/app/shared/api.constants'
import { SharedModule } from 'src/app/shared/shared.module'

import { HttpService } from './../../shared/services/http.service'
import { LaunchesComponent } from './launches.component'
import { Launch } from './launches.model'

@Injectable()
export class LauchesResolver implements Resolve<Launch[]> {
  constructor(private http: HttpService) {}
  public resolve() {
    return this.http.get<Launch[]>(API.launches).pipe(
      map(res =>
        res.map(i => ({
          ...i,
          time: i.orbit_params.epoch ? new Date(i.orbit_params.epoch).getTime() : 0
        }))
      )
    )
  }
}

@NgModule({
  declarations: [LaunchesComponent],
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: LaunchesComponent,
        resolve: { launches: LauchesResolver }
      }
    ])
  ],
  providers: [LauchesResolver]
})
export class LaunchesModule {}
