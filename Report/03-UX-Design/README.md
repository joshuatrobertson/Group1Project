  [&#8592; Back to Report Landing Page](../README.md)
# UX Design
## Table of Contents
1. [Prototyping](#prototyping)  
   a. [Wireframes/Interaction Flow Diagrams](#wireframesinteraction-flow-diagrams)  
2. [Users and Stakeholders](#users-and-stakeholders)       
3. [UX Approach (Heuristics & Design Methods)](#ux-approach-heuristics--design-methods)  
   a. [Match Between System And The Real World](#match-between-system-and-the-real-world)  
   b. [Consistency And Standards](#consistency-and-standards)  
   c. [Aesthetic and Minimalist Design](#aesthetic-and-minimalist-design)  
4. [User Group Definition](#user-group-definition)  
   a. [Research Objectives](#research-objectives)  
   b. [Methodology](#methodology)  
   c. [Ethnography: Survey 1](#ethnography-survey-1)  
   d. [Ethnography: Survey 2](#ethnography-survey-2)  
   e. [Survey 1: Testing the initial prototype](#survey-1-testing-the-initial-prototype)  
   f. [Survey 2: Testing hypotheses and evaluating final product](#survey-2-testing-hypotheses-and-evaluating-final-product)  
   g. [Moderated User Testing](#moderated-user-testing)       

## Prototyping

### Wireframes/Interaction Flow Diagrams

For the project, our initial idea involved creating a single page web application centred around making sustainable fashion choices. For the paper prototype, we used collaborative image software to test the feasibility and look of our idea. Although ideally we would have liked to do this using a traditional pen and paper approach, due to covid restrictions this was not possible. The results of this can be seen below.
<p align="center">
  <img src="images/paper-prototype-2.png" width="500"/>
  <img src="images/paper-prototype-1.png" width="500"/>
</p>
<p align="center">
  <em>Figure 1: Paper Prototype Representing our Initial Idea.</em>
</p>

Further along on the project, we decided as a group that it would be better to implement our second idea, the distraction game. Therefore, we created another prototype using adobe XD. The software, along with allowing us to create a protype, also allowed us to implement interactions between the different elements. The wireframe created involved a login page, two rounds of the card game we were planning to implement and also two charts at the end to display the users score, along with that of all other users of the games score.
For the design, as a group we tried to focus on several key elements, namely:
- Creating a circular user experience, where they are able to replay the game
- Keeping the design 'barebones' in order to allow for greater feature implementation at a later date
- Making the purpose of the game clear

The creation of this wireframe also allowed us to gather some early feedback from users, which further aided us in implemting a user centric methodology. Some of the key feedback included:
- Use advanced sounds, such as WhatsApp and Facebook notifications for the auditory distraction element.
- Use adanced animations, such as a spinning news article for the visual distraction element.
- Use background sounds as well, for example construction or a baby crying to further engage the user.
- Use logic and maths based games
- Keep the games fairly simple to allow for a wider audience access.
- Explain the benefits of user distraction.

The wireframes can be found [here](https://github.com/keane-fernandes/Group1Project/tree/dev/Source/01-Paper-prototype "Paper Prototype Folder").

Alternatively, a gif of the paper prototype as seen in Adobe XD can be seen below.

<p align="center">
  <img src="images/paper-prototype.gif" width="600"/>
</p>
<p align="center">
  <em>Figure 2: Paper Prototype Representing our Final Idea.</em>
</p>

## Users and Stakeholders
There were two directions in which we could have performed our stakeholder analysis – a full blown out analysis where go into the depths of considering investors, system administrators, organisations and categorize our user groups and so on. Or, we could simply restrict the scope of our stakeholder analysis and design our product to suit the best interests of these stakeholders and deliver a product that fits our description of a minimum viable product. We decided to go with option two and restricted the scope to the following stakeholders:

1. The development team (us)
2. Students engaged in online learning
3. Teachers working from home

Since most of the development and design decisions were already taken with the best interests of the development team in mind, there was no need to draw up a persona of a typical developer. However, we did draw up two personas - a student persona and a teacher persona. We think that this stakeholder group would be our priority target user group that suffer the most from maintaining concentration during lockdown. Our user experience and application design decisions were implemented keeping in mind these personas.

<p align="center">
  <img src="images/persona_student.png" width="1000"/>
</p>
<p align="center">
  <em>Figure 3: A student persona.</em>
</p>

<p align="center">
  <img src="images/persona_teacher.png" width="1000"/>
</p>
<p align="center">
  <em>Figure 4: A teacher persona.</em>
</p>

## UX Approach (Heuristics & Design Methods)
The way we approached our user experience was by following Nielsen’s ten general principles during the design phase of our project.

<p align="center">
  <img src="images/design-heuristics.png" width="500"/>
</p>
<p align="center">
  <em>Figure 5: Jakob Nielsen's ten general principles for interaction design.</em>
</p>

Obviously, not all of these had equal influence. For example, the flexibility and efficiency of use generally refers to an experienced user being able to carry out more advanced tasks. Given the small size and precise goal of our application, advanced options would only serve to detract from it's purpose, or potentially discourage first-time users. Despite this, we were still considerate of those users who truly do want to know more about our project, and have provided means to contact us if they so wish.

As a team, we then decided on the 3 most applicaible and important of these principles, which we would strive to implement across our app. These were:
<ul>
<li>Match Between System & Real World </li>
<li>Consistency And Standards </li>
<li>Aesthetic and Minimalist Design </li>
</ul>

While the size of the applictaion played a major part in these choices, our conclusion was aided by considering the wants and needs of our primary stakeholders. Seen above, we think our design most appropriate for educational purposes. As such, the software should be very simple so any teacher can easily explain how it works to their students, and no student should struggle to utilise it.

#### Match Between System And The Real World

Clearly, when designing a web app with "Serious Play" in mind, it is essential that the user can almost immediately identify the issue being tackled. In addition to this, the User should relate in some way to the material presented, whether it be through choice of language, or that the webpage is natural to navigate off of instinct. Since the pandemic has had such a massive global impact, we had our work cut out for us in terms of users relating to the issue. However, it was vital that the distractions we chose to implement throughout our game matched those that the average user would experience. It would be of no use to anyone if the distractions were unrealistic or silly, which would take away hugely from the user experience.

We kept this in mind when designing our surveys for initial end user testing, with a question specifically relating to this issue. For a full breakdown, please see the relevant section below!

Another thing we took from our surveys relates to the websites "ease of navigation". From reading our responses, we found the most popular game type to be a logic game! While this fits in nicely with our previous discussion of <em>working memory</em>, we had to ensure that users were familliar with the game we chose. Matching cards is a simple concept that ties in very nicely with distraction, but also will have almost surely been done before by any user visiting our website. As such, the user does not have to read any long documents, they can simply press play and know what to do. (Our wireframes show this well!)

#### Consistency And Standards

Given our application is contained within a single page, consistent formatting and presentation of the interface is paramount. Thus, during the building process it was decided that we'd stick to simple CSS templates. Once the website was functional, i.e users could log in and play the game, only then would we decide on any additional formatting changes as required. Otherwise, if different people designed different sections of the website we could end up with a confusing or contradictory interface, much like the picture shown below.  

<p align="center">
  <img src="images/design.jpg" width="300"/>
</p>
<p align="center">
  <em>Figure 6: An example inconsistency in a website.</em>
</p>

For comparison, let us showcase the consistent choice of styling throughout our application:

<p align="center">
  <img src="images/button1.png" width="300" />
  <img src="images/button2.png" width="300" />
<p>
<p align = "center">
  <em>Figure 7: Screenshots from our website</em>
</p>


#### Aesthetic and Minimalist Design
In a similar vein, we did not want our design to become oversaturated. For a game centered on distraction, it would be ironic if we fell prey to distracting our users with superfluous content. To ensure a clean, minimalist design, any additional info (e.g Dev Contact, Help Button) were placed far away from the primary purpose. A primary case being the welcome page, with the aformentioned buttons far from the "Start Game" option.

<p align="center">
  <img src="images/website.png" width="700" />
<p>
<p align = "center">
  <em>Figure 8: The website welcome page</em>
</p>

In addition, when playing the game, it is fully centered, and devoid of any other features.

<p align="center">
  <img src="images/cards.png" width="700" />
<p>
<p align = "center">
  <em>Figure 9: The website welcome page</em>
</p>


## User Group Definition
This section covers our end user testing for *DistractAbility*.
### Research Objectives

During the initial prototyping stages our research objectives were as follows:

*    What sorts of distractions will best exemplify the difficulties of focusing on work during lockdown?
*    What sorts of mind-games will people find engaging?
*    Evaluate proposed user experience (flow and UI design).

Towards the end of the development phase our research objectives were as follows:

*    Test our hypothesis that the presence of distractions negatively impacts performance.
*    Test our hypothesis that DistractAbility does effectively highlight the serious problem.
*    Evaluate distractions used in the second round.
*    Evaluate user experience.
*    Feedback on potential future improvements.


### Methodology

*    Two rounds of survey testing
*    One round of moderated user testing


### Ethnography: Survey 1

Age  |  Gender | Background (technical/non-technical)
:-------------------------:|:-------------------------:|:-------------------------:
![](FirstSurvey/ethnography/age.png)  |  ![](FirstSurvey/ethnography/gender.png) |  ![](FirstSurvey/ethnography/background.png)

### Ethnography: Survey 2

Age  |  Gender | Background (technical/non-technical)
:-------------------------:|:-------------------------:|:-------------------------:
![](SecondSurvey/ethnography/age.png)  |  ![](SecondSurvey/ethnography/gender.png) |  ![](SecondSurvey/ethnography/background.png)


### Survey 1: Testing the initial prototype

View the initial prototype [here](../../Source/01-Paper-prototype/paper-prototype.pdf). View the survey questions [here](FirstSurvey/SurveyRound1_Questions.pdf).

**Timeline**
*    Participants were sent the prototype and a summary of our project brief and asked to go over both before the group zoom call. 
*   24 hours after being sent the prototype, the researcher held a group zoom call with subsets of study participants - not all participants attended the same zoom. 
* During the zoom call, the researcher walked everyone through the prototype, answering questions as they came up.
*    Immediately after the zoom call, participants were sent the questionnaire and asked to respond without consulting other participants in the group.
* We received fourteen [responses](FirstSurvey/Survey1_Responses.xlsx). See a more visual representation [here](FirstSurvey/SurveyRound1_Answers.pdf).


<p align="center">
  <img src="images/exampleWalkthrough.png" width="500"/>
</p>
<p align="center">
  <em>Figure 10: Example zoom walk through held with participants.</em>
</p>


**Research Question**:  What sorts of distractions will best exemplify the difficulties of focusing on work during lockdown? *Covered by survey questions 3-5*.

**Findings**
*    Respondents would most like to see ‘Advanced Sound’ (92.9%) closely followed by ‘Advanced Animation’ (78.6%). The least popular option was ‘Player Specific Demands’ (7.1%).
*    Respondents want distractions that relate to the typical lockdown experience – suggestions included P.E. with Joe Wicks and construction sounds (one respondent reported "a lot of DIY in lockdown and it was very annoying").  
*   Most respondents would prioritise mobile phone and social media notification sounds. 

**Impact**
*    We play a variety of what we consider ‘advanced sounds’, including ten different mobile phone and social media sound effects – more than any other type of distraction. Examples include an incoming [Microsoft Teams call](sounds/teamsCall.mp3), a [WhatsApp message](sounds/whatsappIncoming.mp3) and a [Facebook message](sounds/facebookCall.mp3). When related to the theoretical background discussed in the literature review, these sounds reflect the kinds of distractions that would fall in the ‘continuity’ camp.
*    The news articles pulled in through the API are animated such that they move across the screen and change size.
*    In order to tie the distracting sounds to the typical lockdown experience we included [construction sounds](sounds/construction.wav), the [BBC theme song](sounds/BBC.mp3), and soundbites from Netflix’s [*Tiger King*](sounds/joeExotic2.mp3) - the second most watched TV series globally in 2020. 
*    We omitted player specific demands. 

**Evaluation:** The options presented in *Question 2* included examples of what we envisaged for each type of distraction. For instance, one option was ‘Advanced Sound (e.g. notification bells, incoming WhatsApp sound, BBC theme song)’. Providing these specific examples in a tick-box question does not provide much scope for participants to express a different view of what they consider an ‘Advanced Sound’ and the like. However, we believe we corrected this limitation with the following question, which gave respondents an open text box in which to make any additional suggestions as to what kind of distractions they would like to see. 

<p align="center">
  <img src="FirstSurvey/kindsOfDistractions.png" width="500"/>
</p>
<p align="center">
  <em>Figure 11: Responses to Question 2.</em>
</p>


**Research Question**: What sorts of mind-games will people find engaging?

**Findings**
*   People would most like to play Logic Games, followed by Maths Games then General Knowledge.
*   Some concern that general knowledge type games may not be a fair assessment, as what is general knowledge to one person is not common knowledge to the next.  

**Impact**
*    We took into consideration the preference for logic and mathematical games. But given the limitation in the way we asked this question (discussed below), we did not consider this preference more important than our primary objective of using a game that relies on working memory, given the link between working memory and concentration. 
*    We saw that a general knowledge-based game might reduce the broadness of appeal of our application. We, the developers, are all similar in age and other demographic categories and so what is general knowledge to us is less likely to be general knowledge for as many people in other age ranges and demographics.

**Evaluation:** In hindsight *Question 6* was poorly designed, although we believe *Question 7* did somewhat atone for the limitations of 6. *Question 6* asked 'What kinds of mind games would you like to see?' and provided five options, with respondents able to select as many as they agreed with. For more analytic games we gave very broad categories (‘Maths Games’, ‘Logic Games’), whereas the options which might be preferred by less mathematically inclined individuals were incredibly specific (‘Play Music, guess the artist’, ‘sudoku’). This may have biased respondents in favour of Maths and Logic games even if they would have generally preferred less analytical games, but simply have a specific dislike of sudoku, for instance. In fact, the broader the definition the more popular the option – so perhaps the preference for maths and logic games is due to this flaw in our methodology, rather than a genuine preference for more analytical games. Indeed, *Question 7* gave respondent’s free reign to write their comments about what kinds of games they would like to see in the application, and qualitatively, the preference was less heavily in favour of explicitly analytic games.

<p align="center">
  <img src="FirstSurvey/kindsOfGames.png" width="500"/>
</p>
<p align="center">
  <em>Figure 12: Responses to Question 6.</em>
</p>


**Research Question**: Evaluate proposed user experience (flow and UI design).

**Findings**
* 64% of respondents agreed the application should have the given structure, i.e. two roudns the first without distraction and the second with.
* Respondents would like to see the effect of distraction on concentration *after* distractions have ceased. Some suggested a hybrid round that measures the effect of previous distraction on concentration. Others suggested an interlude between round one and two to allow the user to refresh.
* In terms of UI design, respondents were fairly evenly split between preferring a minimalist design to something bold and colourful. 

**Impact**
* In line with the majority view we retained the two-round structure.
* We will consider future improvements that include adding additional rounds in which the distractions are inconstant. 
* Due to the lack of consensus on UI design we chose a bold and colourful aesthetic, which we feel is more memorable.  

**Evaluation:** Our initial prototype was very basic and aesthetically really quite boring. Given that almost all of our respondents were from non-technical backgrounds, it was perhaps difficult for them to comment on the UI design without much inspiration in front of them. 



Prototype Results Page  |  Final Product Results Page
:-------------------------:|:-------------------------:
![](images/prototypeResults.png)  |  ![](images/endResults.png)

-----------------------

### Survey 2: Testing hypotheses and evaluating final product

View the survey questions [here](SecondSurvey/SurveyRound2_Questions.pdf).

**Timeline**

* Most participants in this group were sent the survey and then left alone in a room with *DistractAbility* open on the researcher's PC. They were asked to make their way through the application and then respond to the survey in one sitting.
* A small subset of participants did not have first hand experience of engaging with *DistractAbility*. Instead, they were asked to complete the survey to the best of their ability after watching our demo video.
* We received seventeen [responses](SecondSurvey/Survey2_Responses.xlsm). See a more visual representation [here](FirstSurvey/Survey2_Answers.pdf).


**Research Question**: Test our hypothesis that the presence of distractions negatively impacts performance.


**Findings**
* 76.5% of respondents found the card game harder to complete in the second round, in the presence of distractions, than in the first round.

**Impact**
* This support for our hypothesis shows that our applications is in line with the theory presented in the literature review. 


<p align="center">
  <img src="SecondSurvey/secondHarder.png" width="500"/>
</p>
<p align="center">
  <em>Figure 13: Responses to Question 1</em>
</p>


**Research Question**: Test our hypothesis that *DistractAbility* does effectively highlight the serious problem.


**Findings**
* 100% of respondents agreed that *DistractAbility* "does a good job of demonstrating the problem of heightened distractibility in the context of COVID-19".

**Impact**
* This unanimous support for our hypothesis has given us confidence that our application has successfully met the 'serious' side of serious play. 

<p align="center">
  <img src="SecondSurvey/representative.png" width="500"/>
</p>
<p align="center">
  <em>Figure 14: Question 2 </em>
</p>


**Research Question**: Evaluate distractions used in the second round.


**Findings**
* 41.2% found sounds more distracting than visual distractions
* 29.4% found visuals more distracting
* 29.4% found both equally distracting
* Qualitatively, suggestions for future improvements included: 
* * "Messages popping up on screen"
* * "More distractions - such as a housemate asking for a tea and a chat, a teams notification popping up asking for you, the email pings were triggering, more of them!"
* * "If there could be some way to factor in the stress of having to complete an important task, something with higher stakes, that would interesting - like filling out a form with a deadline on it."

**Impact**
* The majority opinion that sounds are the most distracting is in line with the majority view in Survey 1 that sounds should be prioritised, implying that people do generally know in advance what they find most distracting.
* Great recommendations for more advanced distractions that we will certainly consider building into future iterations of *DistractAbility*.

<p align="center">
  <img src="SecondSurvey/distractionType.png" width="500"/>
</p>
<p align="center">
  <em>Figure 15: Question 4 </em>
</p>


**Research Question**: Evaluate user experience.


**Findings**
* Qualitatively very positive feedback.
* One respondent said "Maybe an instructions menu to explain how the game works. To prepare the users on what to expect when carrying out the game." 

**Impact**
* That one respondent asked for an instructions menu indicates that either (i) the visibility of our 'App Info' popup modal could be improved, or (ii) the text in 'App Info' is not explanatory enough.  


**Research Question**: Feedback on potential future improvements.


**Findings**
* Calls for: (i) more rounds, (ii) separate rounds for audio/visual distractions, (iii) randomised ordering of the rounds, i.e. sometimes the round with distractions first and round without distractions second.  
* Some respondents would like the visual distractions to be improvoed, e.g. "use a template of a phone rather than the visuals spinning around".
* One respondent said "It would be interesting to assess whether there is a difference in distractibility based on gender".

**Impact**
* In response to both the feedback and our realisation that *DistractAbility* does not give the user much autonomy, in future we will consider allowing the user to decide for themselves whether to start with the distraction-infested round or the distractionless round.


**Evaluation of Survey 2**
* Most importantly, the authenticity of the survey is limited by the fact that a handful of participants completed the survey on the basis of the demo video rather than first-hand experience of our site. Indeed it was these participants who tended to answer 'Not Sure' to the first question - for obvious reasons. This is clearly not ideal. However, given the current Covid situation, gathering a subset of responses on the basis of the demo video was the only way we could survey a greater diversity of ages and professions. We judged it preferable to diversify our participant pool at the cost of some responses not being as authentic as first-hand experience. 
* We did not explicitly ask the respondents about their experience of play in *DistractAbility*. If we were to do more user testing, we would either ask survey respondents to what extent was their experience fun, or we would ask about the user's experience of play in an interview.


### Moderated User Testing ###

As part of our end user testing we carried out two moderated user tests, in which the participants each sat with one of the developers and were guided through playing the game, before an informal interview was carried out. Although the interview itself was unstructured, the responses of the participants will be evaluated against the five previously discussed research objectives.

The first participant was a 30 year old male who works as a mechanical engineer and frequently codes as part of his job, he took 45 seconds to complete the first round of the game and 1 minute 10 to complete the second.

The second participant was a 25 year old male student with a non-technical background, he took 43 seconds to complete the first round of the game and 55 seconds to complete the second.

#### Responses

##### Test our hypothesis that the presence of distractions negatively impacts performance.
###### User 1
The participant mentioned during the interview that he found that the presence of distractions greatly inhibited his ability to focus and therefore negatively affected his performance on the game. He discussed how he felt his short term memory was impeded by the distractions and that his attention felt diffuse throughout the second round. This was backed up qualitatively in that he scored a much worse time during the second round.

###### User 2
The participant discussed how although initially he found the distractions off-putting, he felt that after a short while he was able to block them out and focus his attention entirely on the game. Although the participant felt that his performance was not negatively affected by the distractions, his score does not reflect this and it took him much longer to complete the round.

##### Evaluate distractions used in the second round.
###### User 1
The first participant mentioned how he felt that the sounds used were a good feature and that they were highly relevant given the amount of people home working. He said that although he did find the news articles distracting, he felt that more should have been used. When asked if the participant would have added any more elements, he stated that he felt the two were enough and anymore could have had the opposite effect and allowed the user to drown out the sounds.

###### User 2
The second participant left similar comments to the first. He thought that the sounds chosen worked well and that although he thought the news articles were a good addition, adding more would have been beneficial. The user also commented on how he felt that video would have improved the distractibility of our news items.

##### Evaluate user experience.
###### User 1
The participant said that he enjoyed the overall user experience and felt that the game 'flowed well' and was 'enjoyable to play'
###### User 2
The participant left similar comments and mentioned that he enjoyed the game and felt it was intuitive and 'easy to use'.

##### Feedback on potential future improvements.
###### User 1
The user felt that he improved as he played the game and suggested that we randomise the order of the rounds, so that the distracting round may come first. He also added that it would be good for us to add further games and allow the user to choose between them.

###### User 2

The participant made several suggestions throughout the interview. Similar to the first user, he felt that the game would be improved with the addition of more games to chose from. The user also mentioned that he would have liked to be able to create and account and felt concerned around the security aspects of our site.


---------

<p align="center">
  <b>Navigation:</b><br>
  <a href="../02-System-Implementation/README.md">&#8592; Previous Section: System Implementation</a> |
  <a href="#ux-design">&#8593; Back to the top</a> |
  <a href="../04-PM-Sprints/README.md">&#8594; Next Section: Sprints and Project Management</a>
</p>
