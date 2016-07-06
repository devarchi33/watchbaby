/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from "@angular/core";
import {NavController} from 'ionic-angular';

@Component({
    selector: "main-slide",
    templateUrl: "build/pages/home/slides/main-slide.html"
})
export class MainSlidePage {

    private slides;
    private slideOptions = {
        initialSlide: 2,
        autoplay: 500,
        pager: true,
        loop: true
    };

    constructor(private navController:NavController) {
        this.initializeSlides();
    }

    initializeSlides() {
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
    };
}
