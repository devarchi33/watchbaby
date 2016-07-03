/**
 * Created by donghoon on 2016. 7. 3..
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {HomePage} from "../home/home";
import {SetInterestPage} from "../set-interest/set-interest";
import {LoginPage} from "../login/login";

@Component({
    template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Gravity</ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
    </ion-content>
`
})
class TabTextPage {
    isAndroid:boolean = false;

    constructor(platform:Platform) {
        this.isAndroid = platform.is('android');
    }
}

@Component({
    template: `
    <ion-tabs class="tabs-basic">
      <ion-tab tabTitle="Home" [root]="tabOne"></ion-tab>
      <ion-tab tabTitle="Interest" [root]="tabTwo"></ion-tab>
      <ion-tab tabTitle="Login" [root]="tabThree"></ion-tab>
    </ion-tabs>
`
})
export class TabMenu {
    tabOne = HomePage;
    tabTwo = SetInterestPage;
    tabThree = LoginPage;
}
