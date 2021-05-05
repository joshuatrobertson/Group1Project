[&#8592; Back to Report Landing Page](../README.md)
# Evaluation
## Design Evaluation

### Old Idea

#### 1. Sustainadress (*provisional name*) 

In the project we propose Sustainadress, a single page application where the user is tasked with finding the most sustainable outfit of the options provided, sticking within time and budget constraints. This is meant to highlight the environmental impact of fast and unsustainable fashion. We task the user with dressing themselves out of the clothing options provided; after the time limit is up, we reveal whether the user chose the most sustainable outfit overall, out of the options provided. The playful element of this project comes in customizing and dressing up your avatar, and to get a better score on the next playthrough.

### Paper Prototype

- 'old_idea/project 1.pptx' is the prototype we created for our initial idea (Sustainadress).
- 'paper_prorotype.xd' is the prototype for our current idea (Focus on Lock).
- 'prototype_document.docx' is documentation for the current prototype and the thought process behind it.

## Unit Testing

For the unit testing, we decided that it would in theory would make sense to have one good unit test per component. Although this is the case for most of our components, those which share high similarity are tested together. This can be seen in the RestartGame and EndGame Components, of which there is only one test. 
### NewsApiComponent
For the NewsApiComponent, to test that the API is being used to correctly pull in the news articles, we make use of the HttpTesting Controller to inject the http requests into the test. An example of some of the unit tests for this component can be seen below.
```
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
```
it('begin sound variables should be set to true', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.beginSound).toBeFalsy();
    expect(app.beginSound2).toBeFalsy();
    expect(app.beginSound3).toBeFalsy();
  });

```
The test file is also used to assert the output of any relevant functions. For example, within the component we use a random function, that returns a random integer between the two given integers, as can be seen below.
```
 it('should return a number between 1 and 4', () => {
    expect(component).toBeTruthy();
    const randomNumber = component.getRandomNumber(1, 4);
    expect(randomNumber).toBeLessThan(5);
    expect(randomNumber).toBeGreaterThan(0);
  });
  ```
 

## Functional Testing
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
