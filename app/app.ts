import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {LoginPage} from './pages/login/login';
import {TabMenu} from './pages/tabs/tabs';
import {SetInterestPage} from './pages/set-interest/set-interest';
import {HomePage} from './pages/home/home';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
    // rootPage: any = HomePage;
    // rootPage: any = LoginPage;
    // rootPage: any = SetInterestPage;
    rootPage:any = TabMenu;

    constructor(platform:Platform) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }
}

ionicBootstrap(MyApp);
