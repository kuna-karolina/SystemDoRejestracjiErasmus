import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


export interface Registered {
  login: string | null;
  password: string | null;
  address: string | null;
  role: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  rejestruj(registered: Registered) //: Observable<boolean>
   {

    //return this.http.post<>("", rejestracja);
  }
}
