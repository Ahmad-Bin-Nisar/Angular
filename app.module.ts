import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ActiveListComponent } from './active-list/active-list.component';
import { CompletedListComponent } from './completed-list/completed-list.component';
import { todoReducer } from './store/todo.reducer';


@NgModule({
  declarations: [
    AppComponent,
    ActiveListComponent,
    CompletedListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({todo:todoReducer}),
    StoreDevtoolsModule.instrument({maxAge:25}),
    ToastrModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
