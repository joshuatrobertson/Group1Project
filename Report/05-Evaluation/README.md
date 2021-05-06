[&#8592; Back to Report Landing Page](../README.md)
# Evaluation
## Design Evaluation


### Paper Prototype
Our first prototype was created during our first meeting and involved our initial idea 'Sustainadress'. Due to limitations around covid restrictions this was done collaboratively over Google Slides and can be found [here](../Source/01-paper_prototype/old-idea.pdf). Although we decided against implementing this idea, this early prototyping was still useful in getting us working together as a team and engaging in divergent thinking. Shortly following this meeting, we decided against the idea and instead planned to implement the second idea; a game centred around distractibility over lockdown. That discussion can be found [here](../Source/01-paper_prototype/paper-prototype-spec.pdf) along with an early prototype, which can be seen [here](../Source/01-paper_prototype/paper-prototype.pdf). The second prototype played a key role in the design and development of the application and allowed us to create a framework for how the application would be implemented. For example, several of the key elements which made it into the final product include a main page with info pop-ups, tasks with and without distractions, a next round button, display scores button and two columns showing the users scores for the two rounds. Having this outline from the beginning helped us to stay on track and gave us direction throughout development.

### Wireframe
Following on from the decision to use a memory card game instead of a maths based game, we created a wireframe using Adobe XD software. Although by this point we had begun development, creation of the wireframe helped steer us towards a more user centric design and focus on the elements that were most important to the functionality of our application. The wireframe can be found [here](../Source/01-paper_prototype/wireframe), along with a gif which is shown below.
<p align="center">
  <img src="../Source/01-paper_prototype/paper-prototype.gif" width="600"/>
</p>
<p align="center">
  <em>Wireframe made in Adobe XD</em>
</p>

- 'old_idea/project 1.pptx' is the prototype we created for our initial idea (Sustainadress).
- 'paper_prorotype.xd' is the prototype for our current idea (Focus on Lock).
- 'prototype_document.docx' is documentation for the current prototype and the thought process behind it.


## Unit Testing
For the unit testing, we decided that it would in theory would make sense to have one good unit test per component. Although this is the case for most of our components, those which share high similarity are tested together. This can be seen in the RestartGame and EndGame Components, of which there is only one test.

### NewsApiComponent
For the NewsApiComponent, to test that the API is being used to correctly pull in the news articles, we make use of the HttpTesting Controller to inject the http requests into the test. An example of some of the unit tests for this component can be seen below.
```ts
describe('Fetch the News Items', () => {
    it('should return a list of articles', () => {
      service.initArticles().subscribe(articles => {
        expect(articles.length).toBe(3);
      });
      it('should return a list of sources', () => {
        service.initSources().subscribe(articles => {
          expect(articles.length).toBeGreaterThan(5);
        });
    });
  });
  ```

### AppComponent
The main testing is carried out within the AppComponent. Here, we begin by asserting that relevant variables have been set correctly, as can be seen below.

```ts
it('begin sound variables should be set to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.beginSound).toBeFalsy();
    expect(app.beginSound2).toBeFalsy();
    expect(app.beginSound3).toBeFalsy();
  });

```
The test file is also used to assert the output of any relevant functions. For example, within the component we use a random function, that returns a random integer between the two given integers, as can be seen below.

```ts
 it('should return a number between 1 and 4', () => {
    expect(component).toBeTruthy();
    const randomNumber = component.getRandomNumber(1, 4);
    expect(randomNumber).toBeLessThan(5);
    expect(randomNumber).toBeGreaterThan(0);
  });
  ```

## Functional Testing
For the functional testing, we created two tests; the first aimed towards testing the functionality of the essential components of the website, those needed for the game to work; and the second geared towards any other less critical components of the website. The tests can be found below.

1. [Critical components test](functional-test-1.md "The first functional test")
2. [Other components test](functional-test-2.md "The second functional test")

## User Acceptance Testing
- 'UserTesting.md' documents the end user testing process and explains the structure of the UserTesting directory.
- 'EndUserSurvey_(1).pdf' is the survey that was sent out to end user testing participants during the first round of end user testing.
- 'SurveryWrittenResponses_1.xlsm' is a record of test participants' individual, written responses to the survey questions.
- 'SurveryGraphicalResponses_1.docx' contains screenshots of graphically-represented responses to survey questions that did not collect a written answer.

<p align="center">
  <b>Navigation</b><br>
  <a href="../04-PM-Sprints/README.md">&#8592; Previous Section: Sprints and Project Management</a> |
  <a href="#evaluation">&#8593; Back to the top</a> |
  <a href="../06-Conclusion/README.md">&#8594; Next Section: Conclusion</a>
</p>
