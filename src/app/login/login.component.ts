import { Component } from '@angular/core';
import { Login, LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  constructor(private loginService: LoginService,private router: Router)
  {
    console.log("hey2")
  }

  login: Login = 
  {
    login: null,
    password: null,
    role: null
  }

  blad: string | undefined;

  onSubmit() 
  {
    console.log("this.login");
    console.log(this.login);
    /*this.loginService.login(this.login).subscribe(res => {
      if(res)
      {
        this.router.navigateByUrl('');
      } else 
      {
        this.blad = "Błędny login lub hasło!";
      }
    });*/
  }
}
