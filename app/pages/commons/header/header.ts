/**
 * Created by donghoon on 2016. 7. 5..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainSearchPage} from '../search/main-search';

@Component({
    selector: 'commons-header',
    templateUrl: 'build/pages/commons/header/header.html'
})

export class HeaderPage {

    constructor(private navController:NavController) {
    };

    moveSearchPage() {
        this.navController.push(MainSearchPage);
    };
}
