import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { AuthApiService } from "@api";

export const resolveUserInfos: ResolveFn<unknown> = () => {
    const authApi = inject(AuthApiService);
    return authApi.getUserInfo();
}