import { inject } from "@angular/core";
import { RedirectCommand, ResolveFn, Router } from "@angular/router";
import { AuthApiService } from "@api";

export const resolveUserInfos: ResolveFn<unknown> = () => {
    const authApi = inject(AuthApiService);
    return authApi.getUserInfo();
}