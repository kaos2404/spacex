import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'

import { NavbarComponent } from './components/navbar/navbar.component'
import { PaginationComponent } from './components/pagination/pagination.component'
import { ClickOutsideDirective } from './directives-pipes/clickoutside.directive'
import { FilterPipe } from './directives-pipes/filter.pipe'
import { AppTableSortPipe } from './directives-pipes/table-sort.pipe'
import { AppTransformPipe } from './directives-pipes/transform.pipe'
import { MaterialModule } from './material.module'

@NgModule({
  declarations: [
    PaginationComponent,
    FilterPipe,
    ClickOutsideDirective,
    NavbarComponent,
    AppTransformPipe,
    AppTableSortPipe
  ],
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([]), MaterialModule],
  exports: [
    PaginationComponent,
    CommonModule,
    ReactiveFormsModule,
    FilterPipe,
    ClickOutsideDirective,
    NavbarComponent,
    MaterialModule,
    AppTransformPipe,
    AppTableSortPipe
  ]
})
export class SharedModule {}
