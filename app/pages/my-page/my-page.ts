/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: "build/pages/my-page/my-page.html"
})
export class MyPage {
    constructor(private navController:NavController) {
    };
}
