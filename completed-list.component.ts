import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateTodoItem } from '../store/todo.actions';
import { TodoItem } from '../store/todo-item.model';


@Component({
  selector: 'app-completed-list',
  templateUrl: './completed-list.component.html',
  styleUrls: ['./completed-list.component.css']
})
export class CompletedListComponent {
  completedItems: TodoItem[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(state => state.todo.items)
      .subscribe(items => this.completedItems = items.filter(item => item.status === 'completed'));
  }

  markAsActive(item: TodoItem): void {
    this.store.dispatch(updateTodoItem({ updatedItem: { ...item, status: 'active' } }));
  }
}