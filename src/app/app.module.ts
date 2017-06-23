import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

//routes
import { appRoutes } from './app.route'

import {
  AppComponent,
  HeaderComponent,
  CategoryComponent,
  ScannerComponent,
  TakePictureComponent,
  StatisticsComponent,
  DiagramComponent,
  AuthComponent,
  Error404Component
} from './index';


import { firebaseConfig } from './firebase.config'
import { AngularFireModule } from 'angularfire2'

import {
  AuthService,
  BudgetService,
  TranslationService,

  AuthentificatedActivator,
  CategoryRouteActivator
 } from './services/index'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoryComponent,
    StatisticsComponent,
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
    RouterModule.forRoot(appRoutes),
    BootstrapModalModule
  ],
  providers: [
    AuthService,
    BudgetService,
    TranslationService,

    AuthentificatedActivator,
    CategoryRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
