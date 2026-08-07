import { InjectionToken, Provider } from "@angular/core";

export const API_URL = new InjectionToken<string>('Api base url');

export function provideApiUrl(url:string):Provider{
    return {
        provide:API_URL,
        useValue: url
    }
}