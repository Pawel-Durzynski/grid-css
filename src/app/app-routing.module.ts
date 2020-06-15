import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AreaBasedPlacementComponent } from './area-based-placement/area-based-placement.component';
import { AutoFlowComponent } from './auto-flow/auto-flow.component';
import { LineBasedPlacementComponent } from './line-based-placement/line-based-placement.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }
  , { path: 'home', component: HomeComponent }
  , { path: 'area-based-placement', component: AreaBasedPlacementComponent }
  , { path: 'auto-flow-component', component: AutoFlowComponent }
  , { path: 'line-based-placement', component: LineBasedPlacementComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
