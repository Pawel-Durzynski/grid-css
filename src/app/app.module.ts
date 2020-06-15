import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoFlowComponent } from './auto-flow/auto-flow.component';
import { LineBasedPlacementComponent } from './line-based-placement/line-based-placement.component';
import { AreaBasedPlacementComponent } from './area-based-placement/area-based-placement.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AutoFlowComponent,
    LineBasedPlacementComponent,
    AreaBasedPlacementComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
