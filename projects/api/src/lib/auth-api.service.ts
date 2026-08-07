import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseApi } from './base-api';

export type GetTokenRequest = {
  readonly user: {
    readonly name: string;
    readonly password: string;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService extends BaseApi {

  login(dto: GetTokenRequest){
    return this.http.post(this.url('/auth/login'), dto);
  }

  getUserInfo(){
    return this.http.get(this.url('/auth/userinfo'), { withCredentials: true });
  }

  headUserInfo(){
    // FIXME: Use head instead
    return this.getUserInfo();
  }
}
