import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private readonly AUTH_API = "http://localhost:34100/api/v1/auth/";
  private readonly REGISTER_URI = "register";
  private readonly LOGIN_URI = "login";
  private readonly LOGOUT_URI = "logout";
  private readonly REFRESH_TOKEN_URI = "refresh-token";
  private readonly headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json",
  });

  constructor(private http: HttpClient) {}

  register(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return this.http.post(
      this.AUTH_API + this.REGISTER_URI,
      {
        email,
        password,
        firstName,
        lastName,
      },
      { headers: this.headers }
    );
  }

  login(email: string, password: string) {
    return this.http.post(
      this.AUTH_API + this.LOGIN_URI,
      {
        email,
        password,
      },
      { headers: this.headers }
    );
  }

  logout(): Observable<any> {
    return this.http.post(
      this.AUTH_API + this.LOGOUT_URI,
      {},
      { headers: this.headers, withCredentials: true }
    );
  }

  refreshToken() {
    return this.http.post(
      this.AUTH_API + this.REFRESH_TOKEN_URI,
      {},
      { headers: this.headers }
    );
  }
}
