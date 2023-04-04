import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Login 
{
  login: string | null;
  password: string | null;
  role: string | null;
}

export interface LoginRes 
{
  token: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }


  login(login: Login)//: Observable<boolean> 
  {
    console.log("cos");
    //return this.http.post<LoginRes>("", login).pipe();
  }
}
