import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userName: string;
  isLogin: boolean = false;

  constructor() { }


  getUserName(): string {
    return this.userName;
  }

  setUserName(userName: string): void {
    this.userName = userName;
  }

  isUserLogin(): boolean {
    return this.isLogin;
  }

  setUserLogin(flag: boolean): void {
    this.isLogin = flag;
  }
}
