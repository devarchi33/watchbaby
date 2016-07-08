import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {HeaderPage} from '../commons/header/header';
import {CardToothpastePage} from '../home/cards/toothpaste/card-toothpaste';
import {CardBabyPowderPage} from '../home/cards/baby-powder/card-baby-powder';

/*
 Generated class for the CategoriesPage page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    directives: [HeaderPage, CardToothpastePage, CardBabyPowderPage],
    templateUrl: 'build/pages/categories/categories.html',
})
export class CategoriesPage {

    filter:string = "product";
    isAndroid:boolean = false;

    constructor(platform:Platform) {
        this.isAndroid = platform.is('android');
    }

}
