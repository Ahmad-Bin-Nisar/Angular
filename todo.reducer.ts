import { createReducer, on } from '@ngrx/store';
import { addTodoItem, completeTodoItem, updateTodoItem } from './todo.actions';
import { TodoItem } from './todo-item.model';

export interface TodoState {
  items: TodoItem[];
}

const initialState: TodoState = {
  items: []
};

export const todoReducer = createReducer(
  initialState,
  on(addTodoItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item]
  })),
  on(updateTodoItem, (state, { updatedItem }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === updatedItem.id ? updatedItem : item
    )
  })),
  on(completeTodoItem, (state, { itemId }) => ({
    ...state,
    items: state.items.map(item =>
      item.id === itemId ? { ...item, status: 'completed' } : item
    )
  }))
);
