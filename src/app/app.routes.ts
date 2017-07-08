import { Routes } from '@angular/router'

import {
    CategoryComponent,
    ScannerComponent,
    AuthComponent,

    Error404Component
} from './index'

import { AuthentificatedActivator, CategoryRouteActivator } from './services/routeActivators/index'

//TODO: do we need authorization for each statistics children route?
export const appRoutes : Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'categories', component: CategoryComponent, canActivate: [AuthentificatedActivator] },
  { path: 'add', component: ScannerComponent, canActivate: [AuthentificatedActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/categories', pathMatch: 'full'},
  { path: 'statistics/:category', loadChildren: 'app/components/statistics/statistics.module#StatisticsModule', canActivate: [AuthentificatedActivator, CategoryRouteActivator] }
]