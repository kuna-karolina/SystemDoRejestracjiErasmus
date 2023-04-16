import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Registration {
  email: string,
  username: string,
  password: string,
  name: string,
  surname: string,
  role: string
}

// pozniej opcjonalne uzupelnienie dodatkowych danych

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  register(userData: Registration) //: Observable<boolean>
  {
    //return this.http.post<>("", rejestracja);
  }
}
