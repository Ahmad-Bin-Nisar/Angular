import { createAction, props } from '@ngrx/store';
import { TodoItem } from './todo-item.model';

export const addTodoItem = createAction(
  '[Todo] Add Item',
  props<{ item: TodoItem }>()
);

export const updateTodoItem = createAction(
  '[Todo] Update Item',
  props<{ updatedItem: TodoItem }>()
);

export const completeTodoItem = createAction(
  '[Todo] Complete Item',
  props<{ itemId: number }>()
);
