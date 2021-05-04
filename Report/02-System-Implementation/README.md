[&#8592; Back to Report Landing Page](../README.md)
# System Implementation
## System Design Overview
### Back End (MongoDB)
<p align="center">
  <img src="images/schemas.png" width="500"/>
</p>
<p align="center">
  <em>Our data model</em>
</p>
Above is the entity relationship diagram of our data model. Player is in a separate table rather than in the Play table so that the whole data model conforms to normal forms. The player field in Play table is a foreign key that refers to Player table. The timewithoutdistraction and timewithdistraction record the time in seconds a player spends finishing the game in without distraction round and with distraction round respectively. In the Player table, we use email to identify players. The email field is required and unique. We also added a birthday field and an age virtual property in the Player table, but they are not used in our current minimal viable product. We made one schema per file in the ./models/ directory.

### Middle Tier (Express, Node, RESTful API)

#### Choice of software
<p> As seen when exploring our stack architecture, we chose to use Node and Express.js to implement our RESTful API. Aside from the wealth of information available due to the popularity of the MEAN stack, there are several technical benefits to this software choice. </p>

 First and foremost, Node.js is quick. In the right scenario, it's non-blocking I/O combined with asynchronous request handling yield brilliant results. This is due to, despite being single-threaded in terms of executing JS code, it can delegate things like handling files, or network calls to different threads, which when optimized massively reduce execution time, shown well in this <a href="https://medium.com/paypal-tech/node-js-at-paypal-4e2d1d08ce4f" title="https://medium.com/paypal-tech/node-js-at-paypal-4e2d1d08ce4f">report</a>.

On the other end of the spectrum we have Express, which has a shallow learning curve and is a very intuitive way to create your own API, ideal for a simple SPA.

#### API Goals
The goal of this project's API is to seamlessly and efficiently transfer data between the client and server, i.e our front and back end, based on the users game inputs. While simple, for it to qualify as a RESTful API, it must satisfy several constraints, which in the scope of our webpage are:  
<ul>
<li>Client-server architecture</li>
<li>Statelessness</li>
<li>Cacheability</li>
<li>Uniform interface</li>
</ul>

For more information please see <a href ="https://restfulapi.net/" title="https://restfulapi.net/">here</a>.

#### Building the API routes
 To begin, we adapt the boilerplate code shown below that sets up a basic API route using Node and Express (without these, it becomes a much more painstaking process).


Firstly, we add two new routes to our API which clearly separates what kind of data any function we write will handle, increasing the readability of the code.

```js
const express = require('express');
const router = express.Router();
const Player = require('../../models/player');
const playercommands = require('./player');
const playcommands = require('./play');

router.use('/player', playercommands);
router.use('/play', playcommands);

module.exports = router;
```
Now for the fun stuff;
###### Player Handling
```js
router.post('/', async (req, res) => {
  const player = new Player({
    email: req.body.email,
    birthday: req.body.birthday
    });
  try{
    const savedPlayer = await player.save()
    res.json(savedPlayer);
  } catch (err) {
    res.json({ message: err });
  }
});
```
###### Play Handling
```js
router.post('/', async (req, res) => {
  const player = await Player.find({email: req.body.email})
  const play = new Play({
    player: player[0]._id,
    timewithoutdistraction: req.body.time1,
    timewithdistraction: req.body.time2
    });
  try{
    const savedPlay = await play.save()
    res.json(savedPlay);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:playerEmail', async (req, res) => {
  try {
    const player = await Player.find({email: req.params.playerEmail})
    const playerId = player[0]._id;
    const plays = await Play.find({player: playerId})
    res.json(plays);
  } catch (err) {
    res.json({message : err});
  }
});

router.get('/other/:playerEmail', async (req, res) => {
  try {
    const player = await Player.find({email: { $ne: req.params.playerEmail}})
    let playerId = player[0]._id;
    let plays = [];
    for (let i = 0; i < player.length; i++) {
       playerId = player[i]._id;
       let playstemp = await Play.find({player: playerId})
       if (playstemp.length != 0) {
       plays.push(playstemp);
       }
    }
    res.json(plays);
  } catch (err) {
    res.json({message : err});
  }
});
```
These 4 functions completely encapsulate any interaction between the front and back end, by this I mean, only 4 requests can possibly be made to our game. Clearly, this fulfils the criterion of Client-server architecture and statelessness (the latter by inspection). As an aside, you may notice the use of several async/await blocks, which synergise well with the non-blocking I/O nature of node, as while the request is loading, the process is free to go back and take care of any other tasks the application may need.

For reference, these functions (in order):
<ol>
<li>Add a new "player" to the database</li>
<li>Add a new "play" to the database (with an associated player, per the schema)</li>
<li>Get the logged in players score history</li>
<li>Get the score history of all other players</li>
</ol>

#### Using our API
With the API routes created, the next challenge was to integrate these requests into the frontend of our application. Since we want complete separation of the front and back end, it would be unwise to make http requests directly from our components. This could be due to readability concerns, but more importantly scalability. It is far easier to abstract out this process, so when changes are made it is done more efficiently and easily.    

To do this, we made use of another mean stack component, Angular. Angular has inbuilt skeletons for "data services" which, in layman's terms, give common functions to all areas of the application, whether they make requests or simply share data. Please find ours below.
```js
export class DataService {

  private REST_API_SERVER = "http://localhost:3000/api";
  message:string

  constructor(private httpClient: HttpClient) { }

  setMessage(data){
    this.message=data;
  }

  public getOtherPlays(){
    return this.httpClient.get(`${this.REST_API_SERVER}/play/other/${this.message}`)
  }

  public getPlays(){
    return this.httpClient.get(`${this.REST_API_SERVER}/play/${this.message}`)
  }

  public postPlay(payload){
    let httpHeaders = new HttpHeaders({​​​​​'Content-Type' : 'application/json'}​​​​​);
    return this.httpClient.post(`${this.REST_API_SERVER}/play`, payload, {​​​​​headers: httpHeaders, observe: 'response'}​​​​​)
  }

  public postPlayer(payload){
    let httpHeaders = new HttpHeaders({​​​​​'Content-Type' : 'application/json'}​​​​​);
    return this.httpClient.post(`${this.REST_API_SERVER}/player`, payload, {​​​​​headers: httpHeaders, observe: 'response'}​​​​​)
  }
}
```
With this, we can make streamlined requests at any place in the frontend! (an obvious example being adding a player to the database once they've registered). This is very powerful, and makes calling the API as simple as copying in a line of code.

A good example of how we used the API in our SPA is in the bar chart. The data which the bar chart displays is pulled from the API functions into the component, where it is manipulated and then finally displayed.

[BAR CHART PIC Gotta be on Linux will do later]

</p>


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

Node.js at Paypal - [Online]. Available at https://medium.com/paypal-tech/node-js-at-paypal-4e2d1d08ce4f [Accessed 04 May 2021].

What is REST - [Online]. Available at https://restfulapi.net/ [Accessed 04 May 2021].


<p align="center">
  <b>Navigation:</b><br>
  <a href="../01-Background/README.md">&#8592; Previous Section: Background and Motivation</a> |
  <a href="#system-implementation">&#8593; Back to the top</a> |
  <a href="../03-UX-Design/README.md">&#8594; Next Section: UX Design</a>
</p>
