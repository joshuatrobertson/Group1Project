[&#8592; Back to Evaluation Page](README.md)

### Test 1
The second test involves testing less essential components of the website, such as the login screen and the application and contact info buttons.

#### Functional Requirements
1. Allow the user to login with their email.
2. Allow the user to click the information buttons to learn more about the site/ team.

#### Set up
The only set up involved serving the site to run on localhost:3000.

#### Tests
##### Allow the user to login with their email
For this test, upon entering the website we entered an email within the text box and clicked login and play game. To test that the output of this had been recorded we used the function `playerEmail()` which, using the RESTfulAPI recorded the players email. This can be seen below.
```ts
saveEmail(): void {
    this.playerEmail = document.getElementById('email');
    this.playerEmail = this.playerEmail.value;
    let ob = {"email": this.playerEmail};
    this.dataService.postPlayer(ob).subscribe((res: any) => {
      let body = res.body;
      console.log('response body', body);
      }, (error) => {
      console.log('Failed with post');
      console.error(error);
    });
    this.dataService.setMessage(this.playerEmail);
  }
  ```
  <p align="center">
    <em>saveEmail() function</em>
  </p>

The test involved:
1. Enter an email into the text box.
2. Click the 'login and start game' button.
3. Pull the data from the saveEmail() function to assert that the email had been correctly stored.

##### Allow the users to click the about us buttons and learn more about the site
For this test, upon entering the website we click the 3 buttons; 'App Info', 'Developer Info' and 'Developer Contact' to ensure that the popups worked correctly and the information was displayed.


The test involved:
1. Click the 'App Info' button.
2. Ensure that a popup is displayed and that the information is correct.
3. Click the 'Developer Info' button.
4. Ensure that a popup is displayed and that the information is correct.
5. Click the 'Developer Contact' button.
6. Ensure that a popup is displayed and that the information is correct.
7. Click 'Login and Start Game' to ensure that the functionality of the website is not hindered through the buttons.
