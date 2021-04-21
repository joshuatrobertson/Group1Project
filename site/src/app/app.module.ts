import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataService } from './data.service';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RestartGameComponent } from './restart-game/restart-game.component';
import { GameCardComponent } from './game-card/game-card.component';
import { EndGameComponent } from './end-game/end-game.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { NewsApiService } from './news-api.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    RestartGameComponent,
    GameCardComponent,
    EndGameComponent,
    NewsApiComponent,
    EndGameComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
    MatDialogModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [NewsApiService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
