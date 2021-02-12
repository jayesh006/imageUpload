import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppUpdate } from '@ionic-native/app-update/ngx';
import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private appUpdate: AppUpdate,
    private appVersion: AppVersion
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      const updateUrl = 'https://run.mocky.io/v3/d4d56d66-09e7-41fd-a6ce-c3b1e92990c6';
        this.appUpdate.checkAppUpdate(updateUrl).then(update => {
          alert("Update Status:  "+update.msg);
        }).catch(error=>{
          // alert("Error: "+error.msg);
        });

        this.appVersion.getAppName().then(value => {
          // this.AppName = value;
          // console.log(value);
        }).catch(err => {
          alert(err);
        });
        this.appVersion.getPackageName().then(value => {
          // this.PackageName = value;
          // console.log(value);
        }).catch(err => {
          alert(err);
        });
        this.appVersion.getVersionCode().then(value => {
          // this.VersionCode = value;
          console.log(value);
        }).catch(err => {
          alert(err);
        });
        this.appVersion.getVersionNumber().then(value => {
          // this.VersionNumber = value;
          // console.log(value);
        }).catch(err => {
          alert(err);
        });

    });

    

  }
}
