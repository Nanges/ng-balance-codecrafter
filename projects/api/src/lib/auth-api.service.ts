import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type GetTokenRequest = {
  readonly username: string;
  readonly password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  readonly #http = inject(HttpClient);

  login(dto: GetTokenRequest){
    
  }
}
