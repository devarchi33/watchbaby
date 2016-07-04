/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CardToothpastePage} from './toothpaste/card-toothpaste';
import {CardBabyPowderPage} from './baby-powder/card-baby-powder';

@Component({
    selector: "main-card",
    directives: [CardToothpastePage, CardBabyPowderPage],
    templateUrl: "build/pages/home/cards/main-card.html"
})
export class MainCardPage {
    constructor(private navController:NavController) {
        
    }
}
