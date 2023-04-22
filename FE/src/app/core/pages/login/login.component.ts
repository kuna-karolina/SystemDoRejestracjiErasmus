import { Component } from '@angular/core';
import { Login, LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService,private router: Router){}

  loginForm!: FormGroup;

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value);
    this.router.navigateByUrl('dashboard');
  }

  goToLoginPage() {
    this.router.navigate(['/homepage/registration']);
  }
  
}
