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

<hr/>

## Test Questions Formatting Algo
> dimesions = [Ad, In, Co, Re, Cu, De]; *Abbrv of each dimension - e.g Ad = Adaptive etc*

Questions:
1. Ad or In = [0,1]
2. In or Co = [1,2]
3. Co or Re = [2,3] 
4. Re or Cu = [3,4]
5. Cu or De = [4,5]

6. Ad or Co
7. In or Re
8. Co or Cu
9. Re or De
10. Cu or Ad

11. Ad or Re
12. In or Cu
13. Co or De
14. Re or Ad
15. Cu or In

16. Ad or In
17. In or Co
18. Co or Re 
29. Re or Cu
20. Cu or De

21. Ad or Co
22. In or Re
23. Co or Cu
24. Re or De
25. Cu or Ad

26. Ad or Re
27. In or Cu
28. Co or De
29. Re or Ad
30. Cu or In

## Question & Goal - how to get from Dimensions Array into above format?
 * Struggling here ... can't get any algos to work.
 
## Random Notes and Thoughts on how to create this algo
* ISSUES
1. having trouble thinking of way to randomize question choices across all answer arrays
  * couldn't come up with an algorithm here.
  * struggled to find any real solution
    * tried using a clickCount counter based on user clicking question answer buttons but didn't work too well
2. Before running out of time I had considered:
    * Creating separate API routes for each Dimension and use API to pull in data by dimension when needed
    * Taking the array in the front end before displaying and splitting it by dimension
3. More though process on sorting algorithms
    * Wanted to find a way to create a loop that would set each unique dimension as an Objects Keys - flow would be:
        1. Create function that accepts an Array as a parameter
        2. create an empty object Foo
        3. array.forEach and add current iterating item's name (e.g Integrity) as the Key and an empty object as the value
        4. on iteration check if an Object has Key Foo[item.name] - if NOT set that key:
        if(!Foo[item.name]) { Foo[item.name] = item.name }
            * from there, check if Foo[key] has a certain array[index] within the ohkect and if not set that value to it.
            * Point here would be to assign 2 unique values to Foo's Keys so that they can be used as values in rendering
