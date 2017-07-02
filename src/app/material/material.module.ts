import { NgModule } from '@angular/core'
//add custom elements needed in app
import { 
    MaterialModule,
    MdTabsModule,
    MdButtonModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule
} from '@angular/material'

@NgModule({
    imports: [ 
        MaterialModule,
        MdTabsModule,
        MdButtonModule,
        MdSelectModule,
        MdDatepickerModule,
        MdNativeDateModule,
     ],
    exports: [ 
        MaterialModule,
        MdTabsModule,
        MdButtonModule,
        MdSelectModule,
        MdDatepickerModule,
        MdNativeDateModule,
     ]
})

export class ExtendedMaterialModule {}