# Stanford GSB Mock Test

##### Uses: 
React, Redux, Webpack, Express
##### Why?
Because it's tested and works. Allows hot reloading for easy testing and avoids unnecessary full page reloads. Utilizes Webpack dev server for dev env. < -- scrapping webpack dev server for middleware and express- want to utilize express as main server for api

# Pre Code Thoughts...
### Techonology
##### Frontend
* React front end
* Redux for state management
* axios for async http requests
##### Backend
*changing Webpack Dev Server to Webpack middleware in order to utilize Express routes as backend API routes*
* Will build out local MongoDB + Mongoose server
* Express
  * API routes available at __dirname/api__
* Node

#### Testing
* Mocha
* Chai
* Chai-as-promised

<hr/>

### Pseudo Algo
##### START
1. user navs to site
2. creates account
3. Logins
4. Test instructions page and CTA for starting test
5. Questions .......
 1. store all questions in DB
   * Split questions in their respective cats
   * Create util fn to rando pick question from Arr
   * Questions SHOULD NOT be repeated .. e.g dont ask same Adaptability questions - use deduping logic when pulling questions
  
 2. Pull in questions from DB into Redux state on ComponentDidMount()
 3. How to present questions? <-- figure this out
6. Results
##### END



