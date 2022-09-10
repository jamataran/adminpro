import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {SharedModule} from "./shared/shared.module";
import {NopagefoundComponent} from "./pages/nopagefound/nopagefound.component";
import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {ProgressComponent} from "./pages/progress/progress.component";
import {Grafica1Component} from "./pages/grafica1/grafica1.component";
import {PagesComponent} from "./pages/pages.component";
import {PagesModule} from "./pages/pages.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [ // Modulos
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
