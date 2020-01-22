# Fitness Tracker
Allows the user to track a workout. Various attributes of the workout can be stored. The workouts are saved in a Mongo database.

## Description 
Created a fitness tracking app utilizing Node.js, Express.js, MongoDB, Heroku and Mongoose. Majority of the front end code was provided in a homework prompt as part of a web development boot camp. Allows the user to track their workouts and save them in a database.

## Live site: 
https://too-fit-to-quit.herokuapp.com/

## Images
Image of main view:
![Image of user's view when you visit the site](./public/images/main-view.png)

Image of adding exercises:
![Image of user's view when adding an exercise](./public/images/exercise-view.png)

Image of Workout Dashboard
![Image of user's view when looking at the Workout Dashboard](./public/images/workout-dashboard.png)

## Installation 
You will need to npm init to get all the required node modules. If you are running the code locally the local host is set to port 3000. You will also need to go in to the config folder and possibly change the config.json values. The file I used to start the project is server.js.

## Usage 
The primary purpose of this was to meet the requirements of a homework assignment. The major goal seems to be practice with MongoDB and Mongoose You could use it to track a workout, or as the basis of a workout app.

## Credits 
I created this code based on the homework prompt created by Triology Education Services. Majority of the front end code was provided in the homework prompt. Certain pieces of code I used online resources for help. I have included citations in the form of comments throughout the code. Image credits are located below the image.

## Contributing 
I was the only one to work on this project, but of course I had help from my instructor, TA's, and classmates.

## Challenges
I underestimated the differences between querying in sequelize and Mongoose. I was struggling with handling promises associated with Mongoose. I ran into difficulty figuring out how to connect Robo 3T to mLab, which is very different than connecting MySQL Workbench to JawsDB. The last challenge was learning how to seed the mLab database on deployment of the app on Heroku. I figured out how to modify the scripts in the package.json to accomplish this task.

## License
[MIT](https://choosealicense.com/licenses/mit/)
