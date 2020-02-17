import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const STORAGE_KEY = 'done-token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userId: string | null = null;
  private _redirectUrl = '';

  constructor(private router: Router) {
    const storedToken = window.localStorage.getItem(STORAGE_KEY);
    if (storedToken) {
      this._userId = storedToken;
    }
  }

  get userId() {
    return this._userId;
  }

  set redirectUrl(url: string) {
    this._redirectUrl = url;
  }

  login() {
    const userId = Math.random()
      .toString(36)
      .substr(2, 5);
    this._userId = userId;
    window.localStorage.setItem(STORAGE_KEY, userId);

    const redirectUrl = this._redirectUrl;
    this._redirectUrl = '';
    return this.router.navigate([redirectUrl]);
  }

  logout() {
    return new Promise(fulfill => {
      this._userId = null;
      window.localStorage.removeItem(STORAGE_KEY);
      fulfill();
    });
  }
}
