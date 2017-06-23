import { Routes } from '@angular/router'

import {
    CategoryComponent,
    StatisticsComponent,
    ScannerComponent,
    AuthComponent,

    Error404Component
} from './index'

import { AuthentificatedActivator, CategoryRouteActivator } from './services/routeActivators/index'

export const appRoutes : Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'categories', component: CategoryComponent, canActivate: [AuthentificatedActivator] },
  { path: 'statistics/:category', component: StatisticsComponent, canActivate: [AuthentificatedActivator, CategoryRouteActivator] },
  { path: 'add', component: ScannerComponent, canActivate: [AuthentificatedActivator] },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/categories', pathMatch: 'full'}
]