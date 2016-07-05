/**
 * Created by donghoon on 2016. 7. 5..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainSearchPage} from '../../home/search/main-search';
import {MyPage} from "../../my-page/my-page";

@Component({
    selector: 'commons-header',
    directives: [MainSearchPage],
    templateUrl: 'build/pages/commons/header/header.html'
})

export class HeaderPage {

    constructor(private navController:NavController) {
    };

    moveMyPage() {
        this.navController.push(MyPage);
    };
}
