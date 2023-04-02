import { Injectable } from '@angular/core';


export interface Login 
{
  login: string | null;
  password: string | null;
  role: string | null;
}

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor() { }
}
