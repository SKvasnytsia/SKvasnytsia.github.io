import { 
    HistoryComponent,
    CurrentComponent,
    AllComponent
} from './index'

import { CategoryRouteActivator } from '../../services/routeActivators/index'

export const statisticsRoutes =  [
    { path: 'history-all', component: AllComponent},
    { path: ':category/history', component: HistoryComponent, canActivate: [CategoryRouteActivator] },
    { path: ':category', component: CurrentComponent, canActivate: [CategoryRouteActivator]}
]
