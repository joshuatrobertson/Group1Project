import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RestartGameComponent } from './restart-game/restart-game.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GameCardComponent } from './game-card/game-card.component';
import { EndGameComponent } from './end-game/end-game.component';
import { NewsApiComponent } from './news-api/news-api.component';
import { NewsApiService } from './news-api.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    RestartGameComponent,
    GameCardComponent,
    EndGameComponent,
    NewsApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    RouterModule,
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
