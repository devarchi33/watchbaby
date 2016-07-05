import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {HeaderPage} from '../commons/header/header';

@Component({
  directives: [HeaderPage],
  templateUrl: 'build/pages/set-interest/set-interest.html'
})
export class SetInterestPage {
  constructor(private navController: NavController) {

  }
}
