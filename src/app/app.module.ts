import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ViewComponent } from './view-component/view.component'
import { AddComponent } from './add-component/add.component'

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ViewComponent, AddComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
