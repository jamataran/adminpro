import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcumbsComponent} from './breadcumbs/breadcumbs.component';
import {HeadersComponent} from './headers/headers.component';
import {SidebarComponent} from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    BreadcumbsComponent,
    HeadersComponent,
    SidebarComponent
  ],
  exports: [
    HeadersComponent,
    SidebarComponent,
    BreadcumbsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
