import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {MenuComponent} from "./components/menu/menu.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    HomepageComponent,
    MenuComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  exports: [
    NavigationComponent
  ]
})
export class CoreModule {
}
