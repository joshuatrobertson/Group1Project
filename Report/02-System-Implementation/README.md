[&#8592; Back to Report Landing Page](../README.md)
# System Implementation
## System Design Overview
### Back End (MongoDB)
<p align="center">
  <img src="images/schemas.png" width="300"/>
</p>
<p align="center">
  <em>Our data model</em>
</p>
Above is the entity relationship diagram of our data model. Player is in a separate table rather than in the Play table so that the whole data model conforms to normal forms. The player field in Play table is a foreign key that refers to Player table. The timewithoutdistraction and timewithdistraction record the time in seconds a player spends finishing the game in without distraction round and with distraction round respectively. In the Player table, we use email to identify players. The email field is required and unique. We also added a birthday field and an age virtual property in the Player table, but they are not used in our current minimal viable product. We made one schema per file in the ./models/ directory.
### Middle Tier (Express, Node, RESTful API)
### Front End (Angular)

#### Implementation
##### Memory Card Game
The frontend was implemented by adapting a card game which can be found at https://zoaibkhan.com/blog/how-to-create-a-card-memory-game-in-angular/. The game was adapted so that the users could play two rounds, along with having their scores recorded, as discussed below.

##### Measuring the Users Score

As we planned to have two rounds, one with and one without distractions we needed a way to quantitatively differentiate between rounds. For this, we decided to use time to completion as a metric of user score. To implement this a function called `startTimer()`, which can be seen below, was created, which used JavaScripts built in `setInterval()` to calculate the time in seconds and the users first and second round score was placed into seperate variables to be picked up by the backend.

```js
startTimer(): void {
    console.log('Timer started');
    if (this.timerStart === false) {
      this.interval = setInterval(() => {
        if (this.time === 0) {
          this.time++;
        } else {
          this.time++;
        }
        this.display = this.transform( this.time);
      }, 1000);
    }
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return minutes + ':' + (value - minutes * 60);
  }
 ```

##### Distractions
For the distraction elements of the game we decided to go with both visual and auditory distractions following feedback from the user survey. Having more than one distraction also aligns with the literature review, in that attention is a finite resource and the brain can only devote attention to a limited number of stimuli.

###### Visual Distractions
For the visual distractions, we decided to go with current news to align with what people might encounter during lockdown. To implement this, a new component 'news-api' was created an angular card was created using News API [News API, 2021] to pull contempory articles. The card pulls an image, title and description which is placed inside of an angular card. For the articles, we randomly chose from the 3 most recent sources using the function getRandomNumber()
```js
getRandomNumber(min, max): number {
   return Math.random() * (max - min) + min;
 }
 ```
 to add some randomness between users and picked what we deemed the most contentious or attention grabbing news sources. An example of the news card can be seen below.


<p align="center">
  <img src="images/news-card.png" width="300"/>
</p>
<p align="center">
  <em>News card created using News API.</em>
</p>

###### Auditory Distractions
For the auditory distractions we decided to gather several sounds we found distracting. These were further broken down into; ‘long’ sounds, for example children playing and a busy street; and ‘short’ sounds, such as a WhatsApp or Facebook notification. In this way a ‘long’ sound can be played at the beginning and throughout the game period along with several randomly selected ‘short’ sounds that are played at around 15 second intervals. To further improve the user experience, compression, reverb and gain reduction were applied using to the long sounds to give an element of background noise and panning was applied to the short sounds to give the appearance of location.

<p align="center">
  <img src="images/audacity.png" width="600"/>
</p>
<p align="center">
  <em>Adding reverb to 'construction.wav' in Audacity</em>
</p>

#### Functionality and Issues of the Components
<table>
<tr>
  <th>Component</th>
  <th>Functionality</th>
  <th>Issues Encountered</th>
  <th>Resolution</th>
</tr>
<tr>
  <td>GameCardComponent</td>
  <td>A card game using angulars built in animations and mat-card. </td>
  <td>An issue that we encountered was that the game could be completed too quickly and therefore did not give enough time for the user to become distracted.</td>
  <td>To solve this, we edited the css and images to be of a smaller size and to still fit within the users sceen.</td>
</tr>
<tr>
  <td>NewsApiComponent</td>
  <td>An angular card using [News API](https://news-api.org) to pull contemporary news articles </td>
  <td>
  The site would sporadically stop displaying the cards.
  <br></br>
  The component always displayed the same news source.
  <br></br>
  The news card moved out of of the window and caused the window to expand unnecessarily along with the animation looking dull and unnatural.
  </td>
  <td>
  After some time, we realised that the loss of functionality was due to exceeding our API limit of 1000 requests per day, therefore we created a new account so that we could swap out the key when our limit was reached.
  <br></br>
  To allow for a random news source to be chosen each time, we decided on which sources would be the most distracting and then created an array of these for which one was randomly chosen on intialisation of the component.
  <br></br>
  Initially, to animate the cards we used translate to place the div in a random position on the screen and animate to a new, randomly created position. Although giving an element of randomness, due to the movements being stiffed it made the animations look rigid and dull. To correct this, we instead created an svg path and used motion and offset paths to animate, giving a more natural and smooth effect to the animation and also set the css for the parent div to `position: fixed;`to stop the animations extending the screen.
  </td>
</tr>
<tr>
  <td>EndGameComponent</td>
  <td>A component used to link to the users final scores and allow them to play again</td>
  <td>The dialog would not dissapear and allow the user to see their scores</td>
  <td>This was a relatively simple fix and involved allowing the dialog to be closed by using `[mat-dialog-close]="true"`</td>
</tr>
<tr>
  <td>RestartGameComponent</td>
  <td>A component that creates a dialog between rounds</td>
  <td>The implementation of this was relatively straightforward and therefore we did not run into any issues. </td>
  <td>N/A</td>
</tr>
<tr>
  <td>AppComponent</td>
  <td>The main component which contained most of the game logic</td>
  <td>
  When playing a sound, once it began it would continuously play.

  </td>
  <td>N/A</td>
</tr>
</table>



### Continuous Deployment (Docker)
### Additional Components (think User Authentication)

### Bibliography:

News API (n.d.) News API – Search News and Blog Articles on the Web [Online]. Available at https://newsapi.org [Accessed 27 April 2021].

<p align="center">
  <b>Navigation:</b><br>
  <a href="../01-Background/README.md">&#8592; Previous Section: Background and Motivation</a> |
  <a href="#system-implementation">&#8593; Back to the top</a> |
  <a href="../03-UX-Design/README.md">&#8594; Next Section: UX Design</a>
</p>
