# Project Name

[Project Instructions](./INSTRUCTIONS.md), this line may be removed once you have updated the README.md

## Description

In this project, I used Redux Saga to handle axios requests in my Redux Store for different purposes. 

First, I used a GET to render a list of movies with their poster images, titles, and descriptions onto the Home/MovieList page. 

Then, using a hash router that matches based on a movie's ID, I allow a user to click on a movie poster to go to that movie's Details page. On the Details page, I used two seperate GET requests to access different Redux Store reducers--one helps display the movie's title and description and the other helps display the movie's genre(s). From Details, the user can use one button go back to the movie list another button that directs to an Edit page for that movie.

On the edit page, there is an input that allows a user to change the movie's title and a textarea that allows the user to change the description via state. The Cancel button directs back to the movie's Details page and the Save button does the same, but first dispatches a PUT request in the Redux Store that will update the movie's title and description. 

All of these axios requests run through a Node.js server that uses SQL queries to interact with the database and fulfill the requests.

Additional README details can be found [here](https://github.com/PrimeAcademy/github-finalization-assignment).