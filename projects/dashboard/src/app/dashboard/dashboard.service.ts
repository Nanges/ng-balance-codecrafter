import { Injectable, signal } from "@angular/core";

@Injectable()
export class DashboardService{
    readonly collapsed = signal<boolean>(false);
}