import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    private slides;

    constructor(private navController:NavController) {
        this.slides = [
            {
                title: "Welcome to the Docs!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "images/thumbnail-duckling-1.jpg",
            },
            {
                title: "What is Ionic?",
                description: "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
                image: "images/thumbnail-duckling-2.jpg",
            },
            {
                title: "What is Ionic Platform?",
                description: "The <b>Ionic Platform</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
                image: "images/thumbnail-duckling-3.jpg",
            }
        ];
    }
}
