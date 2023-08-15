import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { completeTodoItem, updateTodoItem } from '../store/todo.actions';
import { TodoItem } from '../store/todo-item.model';

@Component({
  selector: 'app-active-list',
  templateUrl: './active-list.component.html',
  styleUrls: ['./active-list.component.css']
})

export class ActiveListComponent implements OnInit {
  activeItems: TodoItem[] = [];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(state => state.todo.items)
      .subscribe(items => this.activeItems = items.filter(item => item.status === 'active'));
  }

  markAsCompleted(item: TodoItem): void {
    this.store.dispatch(completeTodoItem({ itemId: item.id }));
  }

  toggleEditMode(item: TodoItem): void {
    item.editMode = !item.editMode;
    item.editedDescription = item.description;
  }

  saveEditedDescription(item: TodoItem): void {
    item.description = item.editedDescription;
    item.editMode = false;
    this.store.dispatch(updateTodoItem({ updatedItem: item }));
  }

  cancelEdit(item: TodoItem): void {
    item.editMode = false;
  }
}
