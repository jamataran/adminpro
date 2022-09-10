import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './auth/login/login.component';
import {SharedModule} from "./shared/shared.module";
import {PagesModule} from "./pages/pages.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    PagesModule,
    AuthModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
