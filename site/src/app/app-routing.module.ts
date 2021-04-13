import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RadarChartComponent} from './radar-chart/radar-chart.component';

const routes: Routes = [
  {path: 'radar-chart', component: RadarChartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
