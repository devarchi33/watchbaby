/**
 * Created by donghoon on 2016. 7. 3..
 */
import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ViewController, Platform} from 'ionic-angular';
import {HomePage} from "../../home/home";
import {SetInterestPage} from "../../set-interest/set-interest";
import {LoginPage} from "../../login/login";
import {CategoriesPage} from "../../categories/categories";
import {StoryPage} from "../../story/story";

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
    tabThree = CategoriesPage;
    tabFour = StoryPage;
}
