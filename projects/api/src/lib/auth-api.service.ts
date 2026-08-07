import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type GetTokenRequest = {
  readonly user: {
    readonly name: string;
    readonly password: string;
  }
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  readonly #http = inject(HttpClient);

  login(dto: GetTokenRequest){
    return this.#http.post('/api/auth/login', dto);
  }

  getUserInfo(){
    return this.#http.get('/api/auth/userinfo', { withCredentials: true });
  }

  headUserInfo(){
    // FIXME: Use head instead
    return this.getUserInfo();
  }
}
