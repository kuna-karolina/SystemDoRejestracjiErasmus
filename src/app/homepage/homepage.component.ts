import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private router: Router) {}

  login()
  {
    console.log("hey")
    this.router.navigateByUrl('login');
  }

  registration()
  {
    this.router.navigateByUrl('registration');
  }
}
