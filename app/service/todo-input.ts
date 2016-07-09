/**
 * Created by donghoon on 2016. 7. 9..
 */
import {Component} from "@angular/core";
import {TodoService}  from "./todo-service";

@Component({
    selector: 'todo-input',
    template: `<div>
                    <input type=""text #myInput/>
                    <button (click)="onClick(myInput.value)">Click me</button>
               </div>`
})

export class TodoInput {
    constructor(public todoSerivice:TodoService) {

    }

    onClick(value) {
        this.todoSerivice.todos.push(value);
        console.log(this.todoSerivice.todos);
    }
}
