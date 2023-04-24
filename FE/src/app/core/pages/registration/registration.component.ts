import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../../services/registration.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  constructor(
    private router: Router,
    private registrationService: RegistrationService
  ) { }

  registrationForm!: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      role: new FormControl('', Validators.required)
    }, { updateOn: 'blur' });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.registrationService.register(this.registrationForm.value);
    this.router.navigateByUrl('dashboard');
  }

  goToLoginPage() {
    this.router.navigate(['/homepage/login']);
  }
}
