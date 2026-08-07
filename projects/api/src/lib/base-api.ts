import { inject } from "@angular/core";
import { API_URL } from "./api-url.token";
import { HttpClient } from "@angular/common/http";

export abstract class BaseApi{
    readonly #baseUrl = inject(API_URL);
    protected readonly http = inject(HttpClient);

    protected url(strings:TemplateStringsArray, ...values:(string|number|boolean)[]){
        const rawPath = strings.reduce((acc, str, i) => {
            const value = values[i - 1]; // i starts at 1
            const formattedValue = value ?? '';
            return acc + encodeURIComponent(formattedValue) + str;
        });

        const cleanBase = this.#baseUrl.replace(/\/+$/, '');
        const cleanPath = rawPath.replace(/^\/+/, '');

        return `${cleanBase}/${cleanPath}`;
    }
}