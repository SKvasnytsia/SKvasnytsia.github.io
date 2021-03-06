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

import 'fileReader'
import 'hammerjs'

import {
  AppComponent,
  HeaderComponent,
  CategoryComponent,
  ScannerComponent,
  DiagramComponent,
  AuthComponent,
  Error404Component,
  TakePictureComponent
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
  StatisticsCacheService,
  FILE_READER_TOKEN
 } from './services/index'


@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    ScannerComponent,
    DiagramComponent,
    AuthComponent,
    Error404Component,
    TakePictureComponent
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
    StatisticsCacheService,
    { provide: FILE_READER_TOKEN, useValue: FileReader}
  //  Logger
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
