/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProfilePage} from './profile/profile';
import {ReviewPage} from './review/review';

@Component({
    directives: [ProfilePage, ReviewPage],
    templateUrl: "build/pages/my-page/my-page.html"
})
export class MyPage {
    constructor(private navController:NavController) {
    };
}
