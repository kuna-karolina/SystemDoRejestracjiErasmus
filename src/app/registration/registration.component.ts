import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Registered, RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(private router: Router,
    private registrationService: RegistrationService)
     { }

     registered: Registered = {
      login: null,
      password: null,
      address: null,
      role: null
    }
    
  onSubmit() 
  {
    console.log(this.registered);
    this.registered.role = "student";
    this.registrationService.registration(this.registered);
    this.router.navigateByUrl('menu');
  }
}
