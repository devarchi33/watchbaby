/**
 * Created by donghoon on 2016. 7. 4..
 */
import {Component} from "@angular/core";
import {Platform} from 'ionic-angular';

@Component({
    templateUrl: "build/pages/commons/search/main-search.html"
})
export class MainSearchPage {
    items;
    isAndroid:boolean = false;

    constructor(platform:Platform) {
        this.isAndroid = platform.is('android');
        this.initializeItems();
    }

    initializeItems() {
        this.items = [
            "기저귀",
            "로션",
            "물티슈",
            "목욕용품",
            "베이비 파우더",
            "분유",
            "샴푸",
            "선케어",
            "유모차",
            "치약"
        ];
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
