import {Component} from '@angular/core';
import {Platform, ionicBootstrap, MenuController} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomeTabMenu} from './pages/home/tabs/tabs';
import {MyPage} from './pages/my-page/my-page';
import {LoginPage} from './pages/login/login';
import {SignupPage} from './pages/signup/signup';
import {TodoService} from "./service/todo-service";

@Component({
    templateUrl: 'build/app.html'
})
export class MyApp {
    private rootPage:any = HomeTabMenu;
    private homePage = HomeTabMenu;
    private myPage = MyPage;
    private loginPage = LoginPage;
    private signupPage = SignupPage;


    constructor(private platform:Platform,
                private menu:MenuController) {

        menu.enable(true);

        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
        });
    }

    openPage(page) {
        console.log("clicked!" + page);

        // Reset the nav controller to have just this page
        // we wouldn't want the back button to show in this scenario
        this.rootPage = page;

        // close the menu when clicking a link from the menu
        this.menu.close();
    }
}


ionicBootstrap(MyApp, [TodoService]);
