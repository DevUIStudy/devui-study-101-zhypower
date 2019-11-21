import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DevUIModule } from 'ng-devui';
import { SfqComponent } from './sfq/sfq.component';
import { YoubianComponent } from './youbian/youbian.component';
import { LiebiaoComponent } from './liebiao/liebiao.component';
import { ModalsComponent } from './modals/modals.component';

@NgModule({
  declarations: [
    AppComponent,
    SfqComponent,
    YoubianComponent,
    LiebiaoComponent,
    ModalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
