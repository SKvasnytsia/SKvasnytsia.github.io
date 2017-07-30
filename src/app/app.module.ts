import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, PreloadAllModules } from '@angular/router'
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { HashLocationStrategy, LocationStrategy } from '@angular/common'
//import { Logger } from "angular2-logger/core";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ExtendedMaterialModule, SharedModule } from './shared-modules/index'
//routes
import { appRoutes } from './app.routes'

import 'hammerjs'

import {
  AppComponent,
  HeaderComponent,
  CategoryComponent,
  ScannerComponent,
  TakePictureComponent,
  DiagramComponent,
  AuthComponent,
  Error404Component
} from './index';

import { firebaseConfig } from './firebase.config'
import { AngularFireModule } from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth'

import {
  AuthService,
  BudgetService,
  TranslationService,
  AuthentificatedActivator,
  CategoryRouteActivator,
  DbService,
  StatisticsCacheService
 } from './services/index'

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ScannerComponent,
    TakePictureComponent,
    DiagramComponent,
    AuthComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
    BrowserAnimationsModule,
    ExtendedMaterialModule,
    SharedModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    AuthService,
    BudgetService,
    TranslationService,

    AuthentificatedActivator,
    CategoryRouteActivator,
    DbService,
    StatisticsCacheService

  //  Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
