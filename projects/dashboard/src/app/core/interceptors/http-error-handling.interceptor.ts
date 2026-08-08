import { HttpErrorResponse, HttpInterceptorFn } from "@angular/common/http";
import { catchError, of, throwError } from "rxjs";

export const httpErrorHandlingInterceptor: HttpInterceptorFn = (req, next) => {
    return next(req).pipe(catchError((err: HttpErrorResponse) => {
        return throwError(() => err);
    }));
}