/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: "main-card",
    templateUrl: "build/pages/home/cards/main-card.html"
})
export class MainCardPage {
    constructor(private navController:NavController) {
        
    }
}
