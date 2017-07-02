import { 
    HistoryComponent,
    CurrentComponent
} from './index'

import { AuthentificatedActivator, CategoryRouteActivator } from '../../services/routeActivators/index'

export const statisticsRoutes =  [
    { path: 'history', component: HistoryComponent },
    { path: '', component: CurrentComponent}
]
