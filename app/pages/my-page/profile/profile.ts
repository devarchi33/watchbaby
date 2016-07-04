/**
 * Created by donghoon on 2016. 7. 5..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'profile',
    templateUrl: 'build/pages/my-page/profile/profile.html'
})
export class ProfilePage {

    constructor(private navController:NavController) {
    };

}
