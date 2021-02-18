import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';
import { OCR, OCRSourceType } from '@ionic-native/ocr/ngx';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AppUpdate } from '@ionic-native/app-update/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { Pedometer } from '@ionic-native/pedometer/ngx';
import { Stepcounter } from '@ionic-native/stepcounter/ngx';
import { ManUpModule } from 'ionic-manup';
import { HttpClientModule } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    NgCircleProgressModule.forRoot({}), 
    ManUpModule.forRoot({ url: 'https://run.mocky.io/v3/4243fb81-476d-44dd-9379-ac46b7fbce68', externalTranslations: true }), 
    HttpClientModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    File,
    SocialSharing,
    Contacts,
    OCR,
    QRScanner,
    CallNumber,
    AppUpdate,
    AppVersion,
    Pedometer,
    Stepcounter,
    ManUpModule,
    InAppBrowser,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
