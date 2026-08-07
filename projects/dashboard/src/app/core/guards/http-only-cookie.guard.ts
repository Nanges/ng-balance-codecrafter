import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, map, of } from "rxjs";

export const HttpOnlyCookieGuard: CanActivateFn = () => {
    const http = inject(HttpClient);
    const router = inject(Router);

  // Send a HEAD request to check session validity
  return http.get('/api/auth/userinfo', { withCredentials: true }).pipe(
    map(() => true), // HTTP 200/204 -> Cookie is valid, allow route
    catchError(() => {
      // HTTP 401/403 -> Session invalid or expired, redirect
      return of(router.createUrlTree(['/login']));
    })
  );
}