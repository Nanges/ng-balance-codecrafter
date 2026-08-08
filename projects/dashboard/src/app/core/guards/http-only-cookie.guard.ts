import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { catchError, map, of, throwError } from "rxjs";
import { AuthApiService } from "@api";

export const HttpOnlyCookieGuard: CanActivateFn = (state) => {
  const authApi = inject(AuthApiService)
  const router = inject(Router);

  return authApi.headUserInfo().pipe(
    map(() => true), // Response ok
    catchError((err: HttpErrorResponse) => {
      if([401,403].includes(err.status))
        return of(router.createUrlTree(['/login'], {
          queryParams:{returnUrl: state.url}
        }));

      return throwError(() => of(err));
    })
  )
}