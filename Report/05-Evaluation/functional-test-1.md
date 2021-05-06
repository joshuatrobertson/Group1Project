[&#8592; Back to Evaluation Page](README.md)

### Test 1
The first test involves a walk-through from start to finish and focuses on the essential components of the website, which include the timer, card game, distraction elements, including sound and video and the ability to restard the game.

#### Functional Requirements
1. Collect the users score, during both the first and second rounds of the game.
2. Allow the user to play a card game for 2 seperate rounds.
3. During the second round of the game display some form of distracting stimuli to the user.
4. After completion of the game present the data from the two rounds to the player.

#### Set up
As the testing was only on the essential functionality of the application the set up was the same for each test and included.
1. Serve the site on localhost:3000.
2. On the front page enter an email into the text box.
3. Click the 'login and start game' button.

#### Tests
##### Test that the users score is collected with each round
To test to see whether the users score had been collected with each round, we created a small function called `displayTimes()` which can be seen below/

```ts
displayTimes(): void {
   this.returnTime = ('The first time was: ' + this.userFirstTime + '\nThe second time was: ' + this.userSecondTime);
 }
```
<p align="center">
  <em>displayTimes() function</em>
</p>
The function was used during testing to show that the users score had been recorded with each round, and printed the time out in seconds.

The test involved:
1. Play the game by matching all the required cards.
2. Click the 'play again' button to go to the second round.
3. Complete the second round by matching the cards.
4. Check that the printed times match those expected.

##### Allow the user to play two rounds an continuously play the game
For this test, we served the application on localhost:3000 and played the game to make sure that the user encountered two seperate rounds. The testing also involved clicking the 'play again' button to ensure that the user could repeat the game as many times as needs, along with checking that the afortmentioned 'displayTimes()' function continued to record the users scores.

The test involved:
1. Play the game by matching all the required cards.
2. Click the 'play again' button to go to the second round.
3. Complete the second round by matching the cards.
4. Click the 'Play Again' button to be taken back to the beginning of the game.
5. Repeat steps 1-4 for 2 rounds to ensure that the game functions correctly.

##### Make sure that a distraction element was shown with the second round
For this test, we once again walked through the application and made sure that the second round had a distraction element. This was important to the overall testing, as the distraction elements were so embedded within the overall software, small changes often led to bugs within the program that were caught through running this test.

The test involved:
1. Play the game by matching all the required cards.
2. Ensure that there are no distracting elements in this round.
3. Click the 'play again' button to go to the second round.
4. Wait and ensure that both distracting sounds and news cards appear on the screen.


##### Present the data to the user on completion of both rounds
For this test, we again ran through the entirety of the game and then checked to see that the user was then presented with some form of data as can be seen below.



The test involved:
1. Play the game by matching all the required cards.
2. Click the 'play again' button to go to the second round.
3. Complete the second round by matching the cards.
4. Ensure that some form of data is now presented to the user and it is relevant to the users inputted email.
