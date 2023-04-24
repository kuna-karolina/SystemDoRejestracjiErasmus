import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from "./pages/login/login.component";
import {RegistrationComponent} from "./pages/registration/registration.component";
import {PagenotfoundComponent} from "./pages/pagenotfound/pagenotfound.component";
import {HomepageComponent} from "./pages/homepage/homepage.component";
import {NavigationComponent} from "./components/navigation/navigation.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SignMeUpComponent } from './pages/dashboard/sign-me-up/sign-me-up.component';
import { AboutMeComponent } from './pages/dashboard/about-me/about-me.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    PagenotfoundComponent,
    HomepageComponent,
    NavigationComponent,
    DashboardComponent,
    SignMeUpComponent,
    AboutMeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    NavigationComponent,
  ]
})
export class CoreModule {
}
