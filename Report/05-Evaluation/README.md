[&#8592; Back to Report Landing Page](../README.md)
# Evaluation
## Design Evaluation


### Paper Prototype
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
