/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: "card-toothpaste",
    templateUrl: "build/pages/home/cards/toothpaste/card-toothpaste.html"
})
export class CardToothpastePage {

    private cards;

    constructor(private navController:NavController) {

        this.initializeCard();

    }

    initializeCard() {

        this.cards = [
            {
                title: "Marty McFly",
                date: "November 5, 1955",
                image: "images/advance-card-bttf.png",
                description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine...out of aDeLorean?! Whoa. This is heavy."
            },
            {
                title: "Marty McFly",
                date: "November 5, 1955",
                image: "images/advance-card-bttf.png",
                description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine...out of aDeLorean?! Whoa. This is heavy."
            },
            {
                title: "Marty McFly",
                date: "November 5, 1955",
                image: "images/advance-card-bttf.png",
                description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine...out of aDeLorean?! Whoa. This is heavy."
            },
            {
                title: "Marty McFly",
                date: "November 5, 1955",
                image: "images/advance-card-bttf.png",
                description: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine...out of aDeLorean?! Whoa. This is heavy."
            }
        ];

    }
    
}
