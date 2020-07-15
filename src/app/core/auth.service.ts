import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginWithCredentials(userName: string, passWord: string): boolean {
    if (userName === 'leon') {
      return true;
    }
    return false;
  }
}
