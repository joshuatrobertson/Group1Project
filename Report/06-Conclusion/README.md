[&#8592; Back to Report Landing Page](../README.md)
# Conclusion
## Evaluation
### Working practices
The git workflow was relatively new to all of us which meant that there was a slight learning curve at the start of the project. Merge commits, rebasing and finding our way around git land reduced our development velocity in the initial sprints. However, as the sprints progressed, we gained traction and momentum and code reviews and merges simply became second nature. 

Initially, daily stand-ups and documentation seemed too excessive because we were still finding our way around the technical aspects of implementing our application. However, around the later sprints and documentation, the value of documenting meeting minutes and constant communication became apparent. We had the opportunity to constantly review and refocus depending on the status of the project. Meeting daily definitely helped emulate a working developer environment where we could ask questions and simply update each other on our progress. Moreover, it was useful to look back at the design decisions we made at different stages of the project and to learn from them.

As an aside, given the choice, we would avoid the use of Microsoft Teams for communication due to it being a resource hog and the fact that it almost always caused significant disruptions during our stand-ups. Screen sharing during a video call would simply crash the computer of the person presenting, and this would need to be rectified for future work in this project.

### Project Objectives
We had gotten accustomed to the agile workflow by the third sprint, but given the short-lived nature of this project, this may have been a little too late. Nonetheless, we managed to achieve the primary objectives required to produce our minimum viable product (MVP). The underestimation of the effort needed to produce coherent and concise documentation meant that we decided not to pursue our secondary objectives of publicly serving our application and implementing user authentication. However, we believe that the current state of our application can act as a solid starting ground for these additional features to be added. 

### Remote Working (COVID)
It has been an unusual year for all of us in this covid stricken era, and it goes without saying that the lack of human interaction throughout the duration of the project has impacted us all. It is difficult to explain using words, but there is this sense of teamwork and spirit that lingers around the room where developers can talk to each other directly when working under the same roof. Anyhow, we believe that our working practices provided us the closest possible resemblance to what developing would be like in a workplace.

## Social / Ethical Implications


### Data Protection

**saveEmail().** The login page of *DistractAbility* prompts the user for their email address. The function `saveEmail()` then stores the user's email in the database for the purpose of using the email as the user's unique user ID. We required users to be associated with a unique ID in order to organise the statistics around their score history, and as emails are guaranteed to be unique, identifying users by their email removed the need for us to ensure users only entered unique usernames. However, the negative implications this carries for privacy and security does somewhat compromise the ethical integrity of our project given that our database is not properly encrypted.

**User Testing.** Initially our user surveys collected participants' email addresses. Upon reflection we realised this was bad practice and that all responses should be anonymised. We thus replaced the emails with a unique user ID and checked the rest of the data to ensure there were no identifying comments. 


### Accessibility

As stated, the crux of our application is a card game with two rounds. The card game itself is not universally accessible, for instance in its current state the game is inaccessible for blind or visually impaired individuals. However, the accessibility of the distractions implemented in the second round of our game is much better by our assessment. 

**The game itself.** The card game in its current state is inaccessible for visually impaired individuals, as it requires the user to be sighted in order to play. Future work on this application might therefore be to implement narration to describe the game at each state, and a natural language processor that would allow the user to instruct the computer which cards to flip by calling out card coordinates. Adding such features would be a significant step up for us as developers, so other changes are likely to be made first. 

**The distractions.** Our application features both auditory and visual distractions in the second round of the game. The auditory distractions - notification sounds, construction work, etc - are inaccessible for deaf or hearing-impaired individuals. However, the visual distractions do not require the user to have any particular level of hearing. Similarly, though the visual distractions may be inaccessible for blind or visually-impaired individuals, if such individuals are not also hearing-impaired then the auditory distractions will be accessible to them.


## Future Work

The future improvements that we propose for the design of *DistractAbility* are predominantly informed by the literature on serious play and end user feedback, which the future changes we would make to our development process come from self-reflection.  

### Design 

**Multiple Difficulty Levels.** Introduce different difficulty levels to the game and allow users to choose the level at which they wish to begin. Ensure the first few rounds are very easy and the top tier rounds extremely challenging. Allow the user to choose which level they wish to play at. We believe that having multiple difficulty levels would instill feelings of competence in the user after they inevitably complete the easier rounds without too much difficulty, and that this might motivate them to persevere with the more challenging rounds. Moreover, giving the user the freedom to choose which level they wish to play at introduces a presently-absent opportunity for self-determination within the game, which might also act as an intrinsic motivator. 


**User Bubbles.** Allow users to create user 'bubbles' with groups of friends in which the members of the bubble either play the game individually but have their scores ranked in a leaderboard, or they play against each other, competing to flip the cards for instance. This would introduce a greater sense of relatedness than the current option to just see an anonymised average of all other users' scores. Allowing users to play against each other would also introduce an element of competition that some users might find very motivating. 


**Connect Play with Purpose.** Inspired by *Forest* app and it's affiliation with *Trees for the Future*, we think that creating links with a philanthropic external organisation would be a great external source of motivation for some players and something that we ourselves would find rewarding. One way to implement this might be to award the user virtual coins every time the difference between their first and second round scores are within a certain bracket - or whenever they progress a level if we were to introduce mutltiple difficulty levels. These virtual coins could then reflect real revenue donated to causes such as: (i) A.D.H.D charities/organisations, (ii) distraction-proofing primary schools, (iii) creating free online seminars teaching people how to reduce distractions in their working environment and their daily lives. 


**Interlude Between Rounds.** One of the suggestions made in a user survey was to incorporate an interlude in between the rounds. This modification might allow the player to refresh their mind before starting the second round. At the end of the first round, the user would have an elevated mental function, hence it would be useful to bring the user back to some sort of mental baseline. The playing of the second round after this interlude would provide a more accurate description the impact of distractions on memory-based tasks.

**Greater Variety of Games.** Another suggestion we believe was quite useful would be the potential use of puzzle-based games. They would be fairly similar to implement in terms of technical complexity as our current memory game and would provide the user with another metric to assess the impact of distractions on their concentration whilst performing tasks involving logical thinking.


### Development
There were numerous ways we could improve our development pipeline. Firstly, We did not harness the true capabilities of GitHub in our CI/CD pipeline. The use of tags to mark milestone commits (for example, releases on the production branch) could have made our commit logs a lot more readable to visitors of our repository. Secondly, we could have used the pull request feature on GitHub rather than holding code reviews every time a team member finished a feature. The use of comments within a pull request on GitHub could have been used to provide constructive feedback. This would have improved our development velocity by a significant margin.

Automated testing frameworks available on DockerHub could be integrated into the CI/CD pipeline wherein upon creation of a container, a testing script can be run automatically on it. The advantage is all of this would be run on the cloud platform DockerHub uses, and your computer resources could be better utilised elsewhere. An automated response would then be sent back to GitHub notifying if the newly built image passed all the tests. Appropriate action could then be taken depending on the outcome of the tests by the project manager responsible for that feature. Along the same lines, test scripts can be run on code newly pushed code onto certain branches on GitHub, and this would help avoid some unnecessary manual tests and code reviews. At the moment, our testing is carried out manually by a tester, and there is always a possibility that logs may be incorrectly filled in, or certain steps may be missed – essentially the reason why computers came into existence, to enable automation and eliminate errors like these.
 
### Evaluation


___

<p align="center">
  <b>Navigation:</b><br>
  <a href="../05-Evaluation/README.md">&#8592; Previous Section: Evaluation</a> |
  <a href="#conclusion">&#8593; Back to the top</a> |
  <a href="../../README.md">&#8594; Main Repo Page</a> 
</p>
