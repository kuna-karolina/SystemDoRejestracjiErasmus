import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './core/pages/homepage/homepage.component';
import { LoginComponent } from './core/pages/login/login.component';
import { PagenotfoundComponent } from './core/pages/pagenotfound/pagenotfound.component';
import { RegistrationComponent } from './core/pages/registration/registration.component';
import { MenuComponent } from './core/components/menu/menu.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', pathMatch: 'full', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
