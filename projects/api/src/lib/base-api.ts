import { inject } from "@angular/core";
import { API_URL } from "./api-url.token";
import { HttpClient } from "@angular/common/http";

export abstract class BaseApi{
    readonly #baseUrl = inject(API_URL);
    protected readonly http = inject(HttpClient);

    protected url(path:string){
        return `${this.#baseUrl}${path}`;
    }
}