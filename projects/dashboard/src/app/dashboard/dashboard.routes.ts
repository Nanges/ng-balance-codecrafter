import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { resolveUserInfos } from "@dashboard/shared/resolvers/user-infos.resolver";

export const routes:Routes = [
    {
        path:'',
        resolve:[resolveUserInfos],
        component: DashboardComponent
    }
];