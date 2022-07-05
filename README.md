# Calc Game

Simple calculation game built with [React](https://reactjs.org/) and [React Redux](https://react-redux.js.org/) 

## Version 1.0.0

Check it out [here](https://master--calc-game.netlify.app/).

This version only includes addition. Start the game and type what the result is.<br><br>
If your answer is correct your score will be increased based on how fast you came to the correct value and the current level (level is indicated by the green light at the right of the display). If your answer is incorrect the timer will decrease some percentage and display the same addition.<br>
The game ends when the time reaches zero.<br><br>
Score table is local and only top ten scores are displayed. You can reset the rank anytime.


## Local

Run `npm install` inside the project folder, once finished installing run `npm start`


## Config 

`/src/constants.config.js` holds the game configuration:

| Const                   |   Type  | Description                                                                                                                                                                                                                                                                                                                                                                                              |
|-------------------------|:-------:|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `INITIAL_LEVEL`         | **int** | Level at the start of the game, number of digits in operation match the current level                                                                                                                                                                                                                                                                                                                    |
| `SUBLEVEL_LENGTH`       | **int** | Number of correct answer needed to level up.                                                                                                                                                                                                                                                                                                                                                             |
| `FAIL_PERCENTAGE`       | **int** | By how much percentage the timer is reduced for every incorrect answer.<br>This percentage is always based on the max value of the current timer.                                                                                                                                                                                                                                                        |
| `SECONDS_BY_LEVEL`      | **int** | Duration of level. This value is multiplied by the level number to get the current timer length.                                                                                                                                                                                                                                                                                                         |
| `ADDED_TIME_MULTIPLIER` | **num** | Ratio of time added by subsequent levels. Between `0` and `1`. <br>This operation is recursive, meaning each amount of time added is further reduced as levels progress.<br>A value of `0` will add no time on new levels, i.e: all levels will have the same timer duration defined in `SECONDS_BY_LEVEL`.<br>A value of `1` will add the same amount of time each level defined in `SECONDS_BY_LEVEL`. |
| `TIMER_SPEED_FACTOR`    | **int** | Times per second the timer updates. Lower numbers will reduce the processing cost but make the timer less precise.                                                                                                                                                                                                                                                                                       |
