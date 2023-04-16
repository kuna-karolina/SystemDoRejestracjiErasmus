import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from "./core/core.module";
import {ErasmusApplicationModule} from "./modules/erasmus-application/erasmus-application.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ErasmusApplicationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
