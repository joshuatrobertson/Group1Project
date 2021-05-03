[&#8592; Back to Report Landing Page](../README.md)
# Sprints and Project Management
## Communication
### Weeks 1 - 5
We used this time to absorb the content delivered in the technical and design workshops and implement the walkthroughs on our own machines. This gave the us the necessary information to decide on which roles we would undertake during our sprints. Therefore, our communication during these five weeks was just limited to the Tuesday and Thursday SEGP workshop timeslots. 

### Weeks 6 - 10
From Week 6 onwards, we held standups on Mondays, Wednesdays and Fridays at 10:00 AM. In addition, we used the design and technical workshops on Tuesdays and Thursdays to further discuss how we would go about integrating the week's material into our repository. 

The [meeting logs](../../Meetings/README.md) provide a top level summary of all of our standups.
### Communication Channels
Microsoft Teams was the primary tool for our daily standups and we used Discord for our general day to day communication. The Discord server was split into channels to further streamline topics of discussion. The graphic below provides a quick overview of our Discord server.

<p align="center">
  <img src="images/001_discord.gif" width="600"/>
</p>
<div align="center">
  <em>Figure XX : Team discord server.</em>
</div>

## Agile Working
### Choice of Methodology
This first development decision we encountered as a team was to decide on an appropriate workflow methodology that best fit our experience as software developers and the requirements laid out in the brief.

The rationale and thought process behind this decision has been outlined below.
 
The two potential frameworks we considered for our project were:
1. Scrum
2. Waterfall model

First, let's look at an overview of these two models.

#### Scrum
Scrum is an agile software methodology that ditches the traditional linear, sequential approach in favour of an incremental, iterative one.

Instead of extensive planning and design up front, Scrum allows for changing requirements over time by using cross-functional teams – incorporating planners, designers, developers and testers – which work on successive iterations of the product over fixed time periods (timeboxes). The work is organised in to a backlog that is prioritised in to exact priority order based on business (or user) value.

The goal of each iteration is to produce a working product, which can be demonstrated to stakeholders. Feedback can then be incorporated into the next or future iterations.

##### Pros:
- Working software is delivered much more quickly and successive iterations can be delivered frequently, at a consistent pace.
- There is closer collaboration between developers and the business due to high transparency
- Changes to requirements can be incorporated at any point of the process – even late in development.
- It gives the opportunity for continuous integration and deployment for live systems

##### Cons:
- Scrum is often more difficult to understand than Waterfall – at least initially.
- With the emphasis on building working software throughpout, there can be a perception that documentation can sometimes be neglected.
- Scrum can introduce extra inefficiencies in large organisations or can be working against long standing organisational processes, where Watefall would be a better fit.


<p align="center">
  <img src="images/003_scrum.png" width="600"/>
</p>
<div align="center">
  <em>Figure XX : The Scrum workflow.</em>
</div>

#### Waterfall 


#### Evaluation
The next logical step was to evaluate these frameworks against a set of factors critical to delivering our web application in the leanest and most efficient manner given the tight time schedule. A summary of these factors are presented below:

| Evaluation Criteria             | Waterfall                                                                                                                                                                         | Scrum                                                                                                                                                                          | Kanban                                                                                 |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| Workflow                        | Linear sequential model                                                                                                                                                           | Short, iterative sprints                                                                                                                                                       | Continuous flow                                                                        |
| Software Developement Lifecycle | Divided into concrete phases with little to no room for maneuverability                                                                                                           | Every sprint is essentially a development lifecycle making it a suitable choice for short, time critical projects                                                              | Suits a ticket-based or inventory based project (think warehousing, IT support)        |
| Planning                        | Extensive documentation required before the start of the project                                                                                                                  | A backlog of tasks and user stories required that can be accomplished using scoping workshops                                                                                  | Tasks laid out in a backlog and are completed continuously over time, similar to Scrum |
| Change Management               | Tedious because of all of the preplanned schedules                                                                                                                                | Changes can be introduced flexibly, even late in the cycle, because of the short-lived nature of sprints                                                                       | Similar to Scrum                                                                       |
| Stakeholder Collaboration       | After the requirements specification from the client, there is no collaboration until delivery of the first prototype of the product                                              | Maximum client collaboration and intervention possible due to continuous delivery at the end of each sprint                                                                    | More client-driven as compared to Waterfall, but lesser compared to Scrum              |
| Issue Identification            | Due to the lack of iterative review, issues become apparent upon delivery of the first prototype to the client                                                                    | Issues are identified during sprint reviews and can be rectified immediately                                                                                                   | Similar to Scrum                                                                       |
| Scheduling                      | Given that meticulous planning is mandatory at the start if the project, this is a massive disadvantage to inexperienced teams as they are unable to estimate the effort required | The short lived nature of sprints provide invaluable insight into the abilities of team members early in the project, making scheduling a lot more accurate for future sprints | Irrelevant                                                                             |
| Team Size                       | Suitable for big teams                                                                                                                                                            | Suitable for teams with 3-10 members                                                                                                                                           | Team size is inconsequential                                                           |

<p align="center">
  <center><em> Table XX : Potential team workflows categorised by decision criteria.</em></center>
</p>

Based on the data we collected and the feature-centric, modular nature of the project brief, we decided to adopt a slightly modified version of the **scrum** methodology. Given our inexperience as software developers, the planning complexity demanded by the Waterfall model made it a poor choice for this project. 

The Kanban element in this workflow would be one master board on  which all of our backlog exists. The Scrum aspect in this workflow would be the fact that our work would be split into week long sprints where we work to accomplish the tasks set out at the start of the sprint. The idea behind this hybrid approach is that the iterative nature of scrum would help us reflect on our abilities and rescope our project if necessary. Moreover, the relatively short development lifecycle of the Scrum framework had the potential to provide us with invaluable insight into the weaknesses in our workflows. The idea was to then identify these weakness early in the project, learn from them, and rectify them in time for the next sprint. 

### Project Vision and Scoping

Given the tight schedule and open-endedness othe project, we had to scope our project to ensure that we could deliver a minimum viable product that conformed to the primary objectives of the brief.

| Primary Objectives                                                                                                           |       Status       |
| :--------------------------------------------------------------------------------------------------------------------------- | :----------------: |
| Build a basic, functioning protoype of a single page application using the MEAN stack                                        | :white_check_mark: |
| Ensure that the web application strikes the right balance between serious and play                                           | :white_check_mark: |
| Coninuous integration using Github and Docker is to be used throughout the project                                           | :white_check_mark: |
| The web application shall be a card matching game with two rounds consisting of a normal round and a round with distractions | :white_check_mark: |
| The user of the application will be able to compare their scores after both rounds                                           | :white_check_mark: |
                  

| Secoondary Objectives                                                    |       Status       |
| :----------------------------------------------------------------------- | :----------------: |
| The application will be publicly served using containers on Github pages | :white_check_mark: |
| The application will support user authentication using passwords.        |        :x:         |




Enter a high level overview and timeline here. Highlight critical points in the project here.


### User Story Creation

A key step in the scrum workflow is the ideation of the user stories necessary to deliver a minimum viable product (MVP). We believe that the following user stories were essential to do so:


| Code      | User Story                                                                                              |
| --------- | :------------------------------------------------------------------------------------------------------ |
| **UT001** | As a user, I want to be able to type out the web address and arrive on the welcome page of the website. |
| **UT002** | As a user, I want to compare my score against other users of the game.                                  |
| **UT003** | As a user, I want to compare my score against my previous score.                                        |
| **UT004** | As a user, I want to be able to click on new game and be directed to the first round of the game.       |
| **UT005** | As a user, I want to have a seamless user experience, with an uninterrupted game flow.                  |
| **UT006** | As a user, I want to play the game with distractions in the form of news headlines on the screen.       |
| **UT007** | As a user, I want to play the game with distractions in the form of sounds.                             |
| **UT008** | As a user, I want to login to the game with my email.                                                   |

<p align="center">
  <center><em> Table XX : User stories essential for our minimum viable product.</em></center>
</p>


### Sprints
The standups and meeting logs for our sprints can be found [here](../../Meetings/README.md).

Essentially, the way we approached our sprints were as follows:
1. At the start of the week, the team would pick user stories and break that down into smaller subtasks and categorise them into front end, back end or devops tasks.
2. Every member would assume repsonsibility of these subtasks based on their expertise and role in the team, and branch off to work (pun absolutely intended).
3. During the week, daily standups would happen on MS Teams and verbal communication pertaining to issues/solutions would occur on the Discord server.
4. At the end of the week, the team would reconvene for a review of how the week's work went. Merge commits into the **dev** branch were made if the feature was deemed complete by all team members. If the user story implementation was incomplete, it would simply get carried forward to the next week.

#### Sprint 1: Trial Run (05/04 - 11/04)

##### Plan
1. Setup development environments on all team members' workstations and practice the continuous integration process (push / pull workflow) using our own feature branches.
2. Setup Jira to setup our scrum environment and document our sprints.
3. Create the first page of our web application (UT001).
4. Create a first instance of the game on our website (UT004).
5. Create a first draft of our data model and implement this in MongoDB (UT002, UT003).

##### Outcomes and Review
1. The use of Jira added unnecessary overhead to the project and was turning out cumbersome. We decided to use [GitHub projects](https://github.com/keane-fernandes/Group1Project/projects/1) to document our sprints based on the suggestion of Marceli.
2. All members were familiarised with the github workflow to ensure continuous integration.
3. A first prototype for our card matching game was merged into the **dev** branch.
4. All members were able to build and serve the website on their local machines.
   
#### Sprint 2: Development A (12/04 - 18/04)

##### Plan
1. Setup docker, ensure docker-compose script is able to spin up containers and serve our web application.
2. Update the base game so that there is now a round two, where distractions in the form of news article move across the screen as you play (UT006).
3. Add distractions in the form of sounds to our most current version of the game based on feedback from our user surveys and background research (UT007).
4. Setup the Express framework so that our front end can talk to our database (UT002, UT003, UT008).

##### Outcomes and Review
1. Docker gave us some problems initially wherein our NodeJS container would keep restarting. This was fixed using this [shell script](../../site/wait-for.sh) and now deployment is possible through docker containers.
2. The application of the overlay to the game screen proved quite challenging. However, it worked out in the end as game now has news article distractions pop up on the screen which is being pulled by an [external news API](https://newsapi.org).
3. The Express module was still a work in progress and was carried forward into the next sprint.

#### Sprint 3: Development B (19/04 - 25/04)
Based on the momentum and feedback from the devlopment activities of last week's sprint we were coming closer to achieving a fully functional MVP.
##### Plan
1. Add navigation buttons on the website based on UI design workshops.
2. Create the welcome page of our web application (UT001).
3. Continue work on the API and ensures that it interfaces well with our front end and back end (UT002, UT003, UT008).

##### Outcomes and Review
1. The welcome page had been successfully created, although we did not been merge into **dev**. The merge will be performed on the next sprint after it is more thoroughly tested for robustness.
2. The navigation buttons had also been successfully added, and further work was required on the backend to ensure that the buttons were fully functional.
3. We had a first working prototype of our API with more robustness testing to be performed in the next sprint.
   
#### Sprint 4: Bugs, Fixes and Documentation (26/04 - 02/05) 

##### Plan
1. Integrate welcome page, front end , back end and API. 
2. Initiate the project documentation process on Github.
3. Finalize the API.
4. Merge all features of the previous sprint and the work of this sprint into dev (welcome page, navigation buttons and API).
5. If all goes to plan, we have an MVP by the end of the week.

##### Outcomes and Review
1. The welcome page along with the navigation buttons were written in javascript, which caused a lot of issue during integration with the rest of the application. This was recitified by rewriting the components using TypeScript and remerging in dev.
2. The API was finalised, review and merged into dev.
3. The application was then tested using `ng serve` and `docker-compose up`, and worked as expected. At this point, we had a functioning minimum viable product.
4. The project documentation was successfully inititated, with the report template and navigation links fully setup on GitHub.

#### Sprint 5: Deployment and Documentation (03/05 - 07/05)

##### Plan
1. Look at avenues to publicly serve our application using GitHub pages.
2. Finish up documentation, with submission on Thursday evening at the very latest.

##### Outcomes and Review
1. 

## CI/CD Pipeline
### Continuous Integration with GitHub
Our team achieved continuous integration by adopting a fairly standard git worflow consisting of **production**, **staging**, **dev** and **feature** branches. 

The **dev** branch was essentially a working master branch where all of the team members would merge their feature branches. 

In the event of a new feature to be added, the relevant team member would perform the following standard workflow:
1. Branch off of the most recent commit on the **dev** branch into a new **feature-branch**. 
2. Perform the neccessary code commits and the tests needed to implement the feature. 
3. Conduct a review of this newly written code with the rest of the team at the next daily standup. 
4. Merge commit into the **dev** branch and repeat with the next feature.

At the end of each sprint, depending on if we collectively agreed that the current version of our product on the **dev** branch could be deployed as a fully functional product, we would then merge **dev** into **staging**.

The **staging** branch, as the name suggests, was used to stage potential releases of our web application. Our product would be manually tested here to ensure that it worked as expected after which it would be merged into **production** as a release. 

For the sake of completeness, it is important to mention that the **production** branch was reserved for fully tested and stable working releases of our web application. 

<p align="center">
  <img src="images/002_git.png" width="750"/>
  <center><em> Figure XX : Continuous integration using git</em></center>
</p>

### Continuous Deployment with Docker
Docker in 100 seconds video on YouTube.

Docker compose script was imperative for continuous deployment.

Talk about how both of these tools streamlined our workflow (maybe with the help of an image?)
## Team Contributions
Discussion of team roles.

Fill this in in a standup.

| Team Member          | Contribution |
| :------------------- | :----------- |
| Joshua Robertson     |              |
| Alan Cen             |              |
| Ella Gryf-Lowczowska |              |
| Efan Haynes          |              |
| Keane Fernandes      |              |


### Bibliography: Sprints and Project Management

&nbsp; V. Driessen, "Sucessful Git Branching Model", Git, 2010. Available: https://nvie.com/posts/a-successful-git-branching-model/ [Accessed: 20- Apr- 2021].

&nbsp; S. Paradkar, "A beginner's guide to everything DevOps", DevOps, 2020. Available: https://opensource.com/article/20/2/devops-beginners [Accessed: 20- Apr- 2021].

&nbsp; Guru99, "What is Waterfall Model in SDLC? Advantages & Disadvantages", Waterfall, 2018. Available: https://www.guru99.com/what-is-sdlc-or-waterfall-model.html [Accessed: 22- Apr- 2021].

---

<p align="center">
  <b>Navigation:</b><br>
  <a href="../03-UX-Design/README.md">&#8592; Previous Section: UX Design</a> |
  <a href="#sprints-and-project-management">&#8593; Back to the top</a> |
  <a href="../05-Evaluation/README.md">&#8594; Next Section: Evaluation</a> 
</p>
