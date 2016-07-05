import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HeaderPage} from '../commons/header/header';

/*
  Generated class for the StoryPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  directives: [HeaderPage],
  templateUrl: 'build/pages/story/story.html',
})
export class StoryPage {

  constructor(private nav: NavController) {

  }

}
