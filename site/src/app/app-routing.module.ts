import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {RadarChartComponent} from './radar-chart/radar-chart.component';

const routes: Routes = [
  {path: 'radar-chart', component: RadarChartComponent},
  {path: 'bar-chart', component: BarChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
