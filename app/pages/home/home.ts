import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MainSlidePage} from './slides/main-slide';
import {MainCardPage} from './cards/main-card';
import {HeaderPage} from '../commons/header/header';
import {TodoInput} from '../../service/todo-input';

@Component({
    directives: [HeaderPage, MainSlidePage, MainCardPage, TodoInput],
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    constructor(private navController:NavController) {
    };

}
