import { Injectable } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { Observable, catchError, of, switchMap, throwError } from "rxjs";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";
import { StorageService } from "../services/storage.service";

@Injectable({
  providedIn: "root",
})
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;

  constructor(
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService
  ) {}

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401) {
      this.router.navigateByUrl("/login");
      return of(err.message);
    }
    if (err.status === 403) {
      this.router.navigateByUrl("/forbidden");
      return of(err.message);
    }
    return throwError(() => err);
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      if (this.storageService.isLoggedIn()) {
        return this.authService.refreshToken().pipe(
          switchMap(() => {
            this.isRefreshing = false;
            return next.handle(request);
          }),
          catchError((error) => {
            this.isRefreshing = false;
            if (error.status == "403") {
              return this.authService.logout();
            }
            return throwError(() => error);
          })
        );
      }
    }
    return next.handle(request);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    request = request.clone({
      withCredentials: true,
    });
    return next.handle(request).pipe(
      catchError((error) => {
        if (
          error instanceof HttpErrorResponse &&
          !request.url.includes("auth/login") &&
          error.status === 401
        ) {
          return this.handle401Error(request, next);
        }
        return throwError(() => error);
      })
    );
  }
}
