import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './core/pages/homepage/homepage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { PagenotfoundComponent } from './core/pages/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './core/pages/registration/registration.component';
import { DashboardComponent } from './core/pages/dashboard/dashboard.component';
import { SignMeUpComponent } from './core/pages/dashboard/sign-me-up/sign-me-up.component';
import { AboutMeComponent } from './core/pages/dashboard/about-me/about-me.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  {
    path: 'homepage', component: HomepageComponent, children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
    ]
  },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: "", redirectTo: "sign-me-up", pathMatch: "full" },
      { path: 'sign-me-up', component: SignMeUpComponent },
      { path: 'about-me', component: AboutMeComponent },
      { path: 'func3', component: SignMeUpComponent },
      { path: 'func4', component: AboutMeComponent },
    ]
  },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
