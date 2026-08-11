import { Directive, inject } from "@angular/core";
import { DashboardService } from "./dashboard.service";

@Directive({
    selector:'[sidebarLink]',
    host:{
        "[class.w-full]":"!collapsed()",
        "class":"justify-start"
    }
})
export class SidebarLink{
    readonly #dashboardService = inject(DashboardService);
    protected readonly collapsed = this.#dashboardService.collapsed;
}

@Directive({
    selector:'[sidebarIcon]',
    host:{
        "[class.text-base]":"!collapsed()",
        "[class.text-xl]":"collapsed()"
    }
})
export class SidebarIcon{
    readonly #dashboardService = inject(DashboardService);
    protected readonly collapsed = this.#dashboardService.collapsed;
}

@Directive({
    selector:'[sidebarLinkText]',
    host:{
        "[class.sr-only]":"collapsed()",
    }
})
export class SidebarLinkText{
    readonly #dashboardService = inject(DashboardService);
    protected readonly collapsed = this.#dashboardService.collapsed;
}