import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ExtendedMaterialModule, SharedModule } from '../../shared-modules/index'
import {
    DateAdapter,
    MD_DATE_FORMATS
} from '@angular/material'
import { ExpansionPanelsModule } from 'ng2-expansion-panels'

import { statisticsRoutes } from './statistics.routes'

import { 
    MdDateAdapter,
    DATE_FORMATS
} from '../../common/index'

import {
    StatisticsComponent,
    StatisticsListComponent,
    HistoryComponent,
    CurrentComponent,
    AllComponent,
    RangeSelectorComponent
} from './index'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(statisticsRoutes),
        ExtendedMaterialModule,
        ExpansionPanelsModule,
        SharedModule       
    ],
    declarations: [
        StatisticsComponent,
        HistoryComponent,
        CurrentComponent,
        StatisticsListComponent,
        RangeSelectorComponent,

        AllComponent
    ],
    providers: [
        { provide: DateAdapter, useClass: MdDateAdapter},
        { provide: MD_DATE_FORMATS, useValue: DATE_FORMATS}
    ]
})

export class StatisticsModule {

}