import { Component } from '@angular/core';
import { TodoItem } from './todoItem';
import { TodoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showComplete: boolean = false;

  private list = new TodoList("Robbie", [
    new TodoItem("Learn Angular", true),
    new TodoItem("Learn Ionic" ),
    new TodoItem("Go sleep"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
    // return this.list.items.filter(item => !item.complete).length;
  }

  get items(): readonly TodoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
    // return this.list.items.filter(item => !item.complete);
    // return this.list.items;
  }

  addItem(newItem: string) {
    if (newItem != "") {
      this.list.addItem(newItem);
    }
  }
}
