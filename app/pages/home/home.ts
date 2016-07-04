import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainSearchPage} from './search/main-search';
import {MainSlidePage} from './slides/main-slide';
import {MainCardPage} from './cards/main-card';
import {MyPage} from "../my-page/my-page";

@Component({
    directives: [MainSearchPage, MainSlidePage, MainCardPage],
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    constructor(private navController:NavController) {
    };

    moveMyPage() {
        this.navController.push(MyPage);
    }
}
