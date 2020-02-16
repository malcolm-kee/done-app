import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _userId: string | null = null;

  constructor() {}

  get userId() {
    return this._userId;
  }

  login() {
    return new Promise<string>(fulfill => {
      const userId = Math.random()
        .toString(36)
        .substr(2, 5);
      this._userId = userId;
      fulfill(userId);
    });
  }

  logout() {
    return new Promise(fulfill => {
      this._userId = null;
      fulfill();
    });
  }
}
