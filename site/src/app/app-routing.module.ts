import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {LineChartComponent} from './line-chart/line-chart.component';

const routes: Routes = [
  {path: 'bar-chart', component: BarChartComponent},
  {path: 'line-chart', component: LineChartComponent},
  {path: '**', component: LineChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
