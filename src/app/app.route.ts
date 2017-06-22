import { Routes } from '@angular/router'

import {
    CategoryComponent,
    StatisticsComponent,
    ScannerComponent,

    Error404Component
} from './index'

import {CategoryRouteActivator} from './services/routeActivators/category-route-activator.service'

export const appRoutes : Routes = [
  { path: 'categories', component: CategoryComponent },
  { path: 'statistics/:category', component: StatisticsComponent, canActivate: [CategoryRouteActivator] },
  { path: 'add', component: ScannerComponent },
  { path: '404', component: Error404Component },
  { path: '', redirectTo: '/categories', pathMatch: 'full'}
]