import { Component } from '@angular/core';
import { Login, LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private loginService: LoginService,private router: Router){}

  login: Login = 
  {
    login: null,
    password: null,
    role: null
  }


  onSubmit() 
  {
      this.router.navigateByUrl("menu");
  }
}
