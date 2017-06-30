import { NgModule } from '@angular/core'
//add custom elements needed in app
import { 
    MaterialModule,
    MdTabsModule,
    MdButtonModule,
    MdSelectModule
} from '@angular/material'

@NgModule({
    imports: [ MaterialModule, MdTabsModule, MdButtonModule, MdSelectModule ],
    exports: [ MaterialModule, MdTabsModule, MdButtonModule, MdSelectModule ]
})

export class ExtendedMaterialModule {}