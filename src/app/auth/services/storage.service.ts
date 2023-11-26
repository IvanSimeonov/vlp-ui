import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class StorageService {
  constructor() {}

  clean() {
    window.sessionStorage.clear();
  }

  public saveUser(user: any): void {
    window.sessionStorage.removeItem("auth-user");
    window.sessionStorage.setItem("auth-user", JSON.stringify(user));
  }

  public getUser(): any {
    const user = window.sessionStorage.getItem("auth-user");
    if (user) {
      return JSON.parse(user);
    }
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem("auth-user");
    return user ? true : false;
  }
}
