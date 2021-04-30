import { Component, OnInit } from '@angular/core';
import {CardData} from './game-card/card-data.model';
import {MatDialog} from '@angular/material/dialog';
import {EndGameComponent} from './end-game/end-game.component';
import {RestartGameComponent} from './restart-game/restart-game.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  emailClicked = false;


// Images pulled from site. The number (* 2) represents playing cards for the user
  cardImages = [
    'pDGNBK9A0sk',
    'fYDrhbVlV1E',
    'qoXgaF27zBc',
    'b9drVB7xIOI',
    'TQ-q5WAVHj0',
    'wRU27yGfSLQ',
    'vNYia2IeqYs',
    'ts1zXzsD7xc',
    'Mi2urK1OKR0',
    'bXfQLglc81U'
  ];

  // Add a time component
  time = 0;
  interval;
  display;
  timerStart = false;
  userSecondGame = false;

  // Keep track of the users first and second round times
  userFirstTime = 0;
  userSecondTime = 0;
  returnTime;

  // Used to hide button after use
  clicked = false;

  cards: CardData[] = [];

  flippedCards: CardData[] = [];

  matchedCount = 0;

  // Used to begin animations and sound after a period of time
  beginAnimations = false;
  beginAnimations2 = false;
  beginAnimations3 = false;
  beginSound = true;
  beginSound2 = true;
  beginSound3 = true;

  // Store the sounds to be randomised
  longSounds = ['childrenFighting.wav', 'construction.wav', 'busyStreet.wav'];
  shortSounds = ['dogBark.wav', 'facebookCall.mp3', 'facebookNotif.mp3', 'icecream.wav', 'iphoneGlass.mp3', 'iphoneNotification.mp3',
    'joeExotic2.mp3', 'joeExotic3.mp3', 'messengerNotif.mp3', 'myNamesJoeExotic.mp3', 'seagul.m4a', 'twitterNotif.mp3',
    'vibration.mp3', 'whatsappIncoming.mp3', 'whatsappNotif.mp3'];


  ngOnInit(): void {
  }

  constructor(private dialog: MatDialog) {
  }


  shuffleArray(anArray: any[]): any[] {
    return anArray.map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]);
  }



  startGame(): void {
    this.setupCards();
    this.startTimer();
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default'
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });
    this.cards = this.shuffleArray(this.cards);
  }

  cardClicked(index: number): void {
    const cardInfo = this.cards[index];


    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }

    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }

  playAudio(audioSource): void {
    console.log('Audio called');
    const audio = new Audio('../assets/sounds/' + audioSource);
    audio.load();
    audio.play();
  }

  // Play a random sound every 15 seconds
  playRandomSound(): void {
    let audio;
    for (let i = 0; i < 1; i++) {
      audio = this.shortSounds[Math.floor(Math.random() * this.shortSounds.length)];
      if (this.time % 15 === 0) {
        this.playAudio(audio);
      }
    }
  }

  startTimer(): void {
    console.log('Timer started');
    if (this.timerStart === false) {
      this.interval = setInterval(() => {
        if (this.time === 0) {
          this.time++;
        } else {
          this.time++;
        }
        if (this.time > 5 && this.userSecondGame === true) {
          if (this.beginSound === true) {
            this.playAudio('teamsCall.mp3');
            this.beginSound = false;
          }
        }
        // Get a random number between 3 and 7 (seconds) and display the news item if reached
        if (this.time > this.getRandomNumber(10, 15) && this.userSecondGame === true) {
          if (this.beginSound2 === true) {
            // Pick a random long sound to play
            this.playAudio(this.longSounds[Math.floor(Math.random() * this.longSounds.length)]);
            this.beginSound2 = false;
          }
          this.beginAnimations = true;
        }
        if (this.time > this.getRandomNumber(18, 24) && this.userSecondGame === true) {
          this.beginAnimations2 = true;
        }
        if (this.time > this.getRandomNumber(27, 36) && this.userSecondGame === true) {
          this.beginAnimations3 = true;
        }
        if (this.time > 10 && this.userSecondGame === true) {
          this.playRandomSound();
        }


        this.display = this.transform( this.time);
      }, 1000);
    }
    this.timerStart = true;
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }

  pauseTimer(): void {
    clearInterval(this.interval);
  }

  resetTimer(): void {
    this.timerStart = false;
    this.time = 0;
  }

  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      const nextState = cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;

      this.flippedCards = [];

      let dialogRef;
      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          dialogRef = this.dialog;
          this.beginAnimations = false;
          this.beginAnimations2 = false;
          this.beginAnimations3 = false;
          this.beginSound = true;
          this.beginSound2 = true;
          this.beginSound3 = true;

          if (this.userSecondGame === true) {
            dialogRef = this.dialog.open(EndGameComponent, {
            });
          } else {
            dialogRef = this.dialog.open(RestartGameComponent, {
              disableClose: true
            });
          }
          // Stop timer and assign the times for each run
          clearInterval(this.interval);
          if (this.userSecondGame === false) {
            this.userFirstTime = this.time;
            this.userSecondGame = true;
          } else {
            this.userSecondTime = this.time;
            this.userSecondGame = false;
            this.displayTimes();
          }

          dialogRef.afterClosed().subscribe(() => {
            this.resetTimer();
            this.restart();
          });
        }
      }

    }, 1000);
  }

  restart(): void {
    this.matchedCount = 0;
    this.setupCards();
    this.startTimer();
  }

  displayTimes(): void {
    this.returnTime = ('The first time was: ' + this.userFirstTime + '\nThe second time was: ' + this.userSecondTime);
  }

  getRandomNumber(min, max): number {
    return Math.random() * (max - min) + min;
  }

}
