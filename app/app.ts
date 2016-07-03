import {Component} from '@angular/core';
import {Platform, ionicBootstrap} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {LoginPage} from './pages/login/login';
import {SetInterestPage} from './pages/set-interest/set-interest';
import {MainPage} from './pages/main/main';
import {TabMenu} from './pages/tabs/tabs';


@Component({
    template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
    // rootPage: any = HomePage;
    // rootPage: any = LoginPage;
    // rootPage: any = SetInterestPage;
    // rootPage: any = MainPage;
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
