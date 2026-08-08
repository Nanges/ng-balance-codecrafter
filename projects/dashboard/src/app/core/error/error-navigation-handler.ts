import { HttpErrorResponse } from "@angular/common/http";
import { inject } from "@angular/core";
import { NavigationError, RedirectCommand, Router } from "@angular/router";

export function errorNavigationHandler(navigationError: NavigationError){
    const error = navigationError.error;
    const router = inject(Router);

    if(error instanceof HttpErrorResponse){
        if([401,403].includes(error.status)){
            return new RedirectCommand(router.createUrlTree(['login'],{
                queryParams:{returnUrl: navigationError.url}
            }))
        }
    }

    return new RedirectCommand(router.createUrlTree(['error']));
}