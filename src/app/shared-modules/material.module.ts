import { NgModule } from '@angular/core'
//add custom elements needed in app
import { 
    MaterialModule,
    MdTabsModule,
    MdButtonModule,
    MdSelectModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdProgressSpinnerModule
} from '@angular/material'

@NgModule({
    imports: [ 
        MaterialModule,
        MdTabsModule,
        MdButtonModule,
        MdSelectModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdProgressSpinnerModule
     ],
    exports: [ 
        MaterialModule,
        MdTabsModule,
        MdButtonModule,
        MdSelectModule,
        MdDatepickerModule,
        MdNativeDateModule,
        MdProgressSpinnerModule
     ]
})

export class ExtendedMaterialModule {}