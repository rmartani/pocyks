import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Facebook } from '@ionic-native/facebook';

import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { HomePageModule } from '../pages/home/home.module';
import { TabCepPageModule } from '../pages/tab-cep/tab-cep.module';
import { TabMapPageModule } from '../pages/tab-map/tab-map.module';
import { SociaisPageModule } from '../pages/sociais/sociais.module';

// import { TabUsuariosPage } from '../pages/tab-usuarios/tab-usuarios';
import { TabCepPage } from '../pages/tab-cep/tab-cep';
import { TabMapPage } from '../pages/tab-map/tab-map';
import { SociaisPage } from '../pages/sociais/sociais';



import { IonicStorageModule } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { ContactProvider } from '../providers/contact/contact';

import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyCMeArK9bNabZn_WN0dbUXKH2ss8551mzs",
  authDomain: "pocyks-2d523.firebaseapp.com",
  databaseURL: "https://pocyks-2d523.firebaseio.com/",
  storageBucket: "pocyks-2d523.appspot.com",
  messagingSenderId: '<your-messaging-sender-id>'
};


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    // HomePage,
    // TabUsuariosPage,
    // TabCepPage,
    // TabMapPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomePageModule,
    TabCepPageModule,
    TabMapPageModule,
    SociaisPageModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot({
      name: '__mydb',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    // TabUsuariosPage,
    TabCepPage,
    TabMapPage,
    SociaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePipe,
    ContactProvider,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook    
  ]
})
export class AppModule {}