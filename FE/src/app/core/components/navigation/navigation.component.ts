import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface NavType {
  name: string;
  path: string;
}

export interface Navigation {
  [id: string]: NavType
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent {

  NAVIGATION: Navigation = {
    registration: {
      name: "Rejestracja na wyjazd",
      path: "/dashboard/sign-me-up"
    },
    aboutMe: {
      name: "Moje dane",
      path: "/dashboard/about-me"
    },
    // func3: {
    //   name: "Funkcjonalność 3",
    //   path: "/dashboard/sign-me-up"
    // },
    // func4: {
    //   name: "Funckjonalność 4",
    //   path: "/dashboard/about-me"
    // },
    login: {
      name: "logowanie (podgląd)",
      path: "/homepage/login"
    },
    dashboard: {
      name: "rejestracja (podgląd)",
      path: "/homepage/registration"
    },
  }
  public navigation = Object.keys(this.NAVIGATION);

  constructor(public router: Router) {

  }
}
