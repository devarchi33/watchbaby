/**
 * Created by donghoon on 2016. 7. 3..
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {HomePage} from "../../home/home";
import {SetInterestPage} from "../../set-interest/set-interest";
import {LoginPage} from "../../login/login";
import {MyPage} from "../../my-page/my-page";

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
      <ion-tab tabTitle="홈" [root]="tabOne"></ion-tab>
      <ion-tab tabTitle="리뷰" [root]="tabTwo"></ion-tab>
      <ion-tab tabTitle="카테고리" [root]="tabThree"></ion-tab>
      <ion-tab tabTitle="스토리" [root]="tabFour"></ion-tab>
    </ion-tabs>
`
})
export class HomeTabMenu {
    tabOne = HomePage;
    tabTwo = SetInterestPage;
    tabThree = LoginPage;
    tabFour = MyPage;
}
