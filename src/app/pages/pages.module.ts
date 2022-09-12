import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NopagefoundComponent} from './nopagefound/nopagefound.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProgressComponent} from './progress/progress.component';
import {Grafica1Component} from './grafica1/grafica1.component';
import {PagesComponent} from './pages.component';
import {SharedModule} from "../shared/shared.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";
import {PagesRoutingModule} from "./pages-routing.module";
import {FormsModule} from "@angular/forms";
import {ComponentsModule} from "../components/components.module";
import {NgChartsModule} from "ng2-charts";


@NgModule({
  declarations: [ // Si no se exportan no funcionan.
    NopagefoundComponent,
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    PagesRoutingModule,
    FormsModule,
    ComponentsModule,
    NgChartsModule
  ]
})
export class PagesModule {
}
