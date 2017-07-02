import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ExtendedMaterialModule } from '../../material/material.module'
import {
    DateAdapter,
    MD_DATE_FORMATS
} from '@angular/material'

import { statisticsRoutes } from './statistics.routes'

import { 
    MdDateAdapter,
    DATE_FORMATS
} from '../../common/index'

import {
    StatisticsComponent,
    StatisticsListComponent,
    HistoryComponent,
    CurrentComponent
} from './index'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(statisticsRoutes),
        ExtendedMaterialModule
    ],
    declarations: [
        StatisticsComponent,
        HistoryComponent,
        CurrentComponent,
        StatisticsListComponent
    ],
    providers: [
        { provide: DateAdapter, useClass: MdDateAdapter},
        { provide: MD_DATE_FORMATS, useValue: DATE_FORMATS},
    ]
})

export class StatisticsModule {

}