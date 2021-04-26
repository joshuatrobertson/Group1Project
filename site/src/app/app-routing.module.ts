import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {CardGameMainComponent} from './card-game-main/card-game-main.component';

const routes: Routes = [
  { path: 'card-game', component: CardGameMainComponent },
  {path: 'bar-chart', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
