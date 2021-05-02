[&#8592; Back to Report Landing Page](../README.md)
# Sprints and Project Management
## Communication

### Communication Channels
Microsoft Teams was the primary tool for our daily standups and we used Discord for our general day to day communication. The Discord server was split into channels to further streamline topics of discussion. The graphic below provides a quick overview of our Discord server.

<p align="center">
  <img src="images/001_discord.gif" width="600"/>
  <center><em>Figure XX : Team discord server.</em></center>
</p>

### Weeks 1 - 5
We used this time to absorb the content delivered in the technical and design workshops and implement the walkthroughs on our own machines. This gave the us the necessary information to decide on which roles we would undertake during our sprints. Therefore, our communication during these five weeks was just limited to the Tuesday and Thursday SEGP workshop timeslots. 

### Weeks 6 - 10
From Week 6 onwards, we held standups on Mondays, Wednesdays and Fridays at 10:00 AM. In addition, we used the design and technical workshops on Tuesdays and Thursdays to further discuss how we would go about integrating the week's material into our repository. 

The [meeting logs](../../Meetings/README.md) provide a top level summary of all of our standups.

## Agile Working
### Choice of Methodology
This first development decision we encountered as a team was to decide on an aprropriate workflow methodology that best fit our experience and the requirements laid out in the brief.

The rationale and thought process behind this decision has been outlined below.
 
The three potential frameworks we considered for our project were:
1. Scrum (subset of agile)
2. Kanban (subset of agile)
3. Waterfall model

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

Based on the data we collected and the feature-centric, modular nature of the project brief, we decided to adopt the **scrum methodology** of the agile workflow for our project. Given our inexperience as software developers, the planning complexity demanded by the Waterfall model made it a poor choice for this project. Moreover, the relatively short development lifecycle of the Scrum framework had the potential to provide us with invaluable insight into the weaknesses in our workflows. The idea was to then identify these weakness early in the project, learn from them, and rectify them in time for the next sprint. 

### Implementation of Scrum

#### Step 1: Project Vision and Scoping

Given the tight schedule and open-endedness othe project, we had to scope our project to ensure that we could deliver a minimum viable product that conformed to the primary objectives of the brief.

Insert primary objectives here.

Enter a high level overview and timeline here. Highlight critical points in the project here.

#### Step 2: User Story Creation

A key step in the scrum workflow is the ideation of the user stories necessary to deliver a minimum viable product (MVP). We believe that the following user stories were essential to do so:


| Code | User Story                                                                                                                   |
| ---- | :--------------------------------------------------------------------------------------------------------------------------- |
| **UT1** | **User Story 1**: As a user, I want to be able to type out the web address and arrive on the welcome page of the website.    |
| **UT1** | **User Story 2**: As a user, I want to compare my score against other users of the game.                                    |
| **UT1** | **User Story 3**: As a user, I want to compare my score against my previous score.                                           |
|      | **User Story 4**: As a user, I want to be able to click on new game and be directed to the first round of the game.        |
|      | **User Story 5**: As a user, I want to have a seamless user experience, with an uninterrupted game flow.                     |
|      | **User Story 6**: As a user, I want to play the game with distractions in the form of news headlines on the screen.          |
|      | **User Story 7**: As a user, I want to play the game with distractions in the form of notification sounds in the background. |
|      | **User Story 8**: As a user, I want to login to the game with my email.                                                      |

<p align="center">
  <center><em> Table XX : User stories essential for our minimum viable product.</em></center>
</p>

#### Step 3: Sprint!
Initially, we setup a Jira account account to help document our sprints. However, the added overhead was turning out cumbersome and we decided to use [GitHub projects](https://github.com/keane-fernandes/Group1Project/projects) to document our sprints based on the suggestion of Marceli. 

Essentially, the way we approached our sprints were as follows:
1. At the start of the week, the team would pick user stories and break that down into smaller subtasks and categorise them into front end, back end or devops tasks.
2. Every member would assume repsonsibility of these subtasks based on their expertise and role in the team and branch off to work (pun absolutely intended).
3. During the week, daily standups would happen on MS Teams and verbal communication pertaining to issues/solutions would occur on the Discord server.
4. At the end of the week, the team would reconvene for a review of how the week's work went. Merge commits int the dev branch were made if the feature was deemed complete by all team members. If the user story implementation was incomplete, it would simply get carried forward to the next week.

##### [Sprint 1: Trial Run (05/04 - 11/04)]

##### Goals
The purpose of this sprint was to setup development environments on all team members' workstations and to practice the continuous integration process (push / pull workflow ) using our own feature branches.

Setup a Jira account account to setup our kanban board and document our sprints. However, the added overhead was turning out cumbersome, and we decided to use [GitHub projects](https://github.com/keane-fernandes/Group1Project/projects) to document our sprints based on the suggestion of Marceli.

##### User Stories



##### Review
Since this was our first week



##### Sprint 2: Development 1 (12/04 - 18/04)



##### Goals

##### User Stories

##### Review

##### Sprint 3: Development 2 (19/04 - 25/04)

##### Goals

##### User Stories

##### Review

##### Sprint 4: Bugs, Fixes and Documentation (26/04 - 02/05) 

##### Goals

##### User Stories

##### Review

##### Sprint 5: Documentation (03/05 - 07/05)

##### Goals

##### User Stories

##### Review


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
