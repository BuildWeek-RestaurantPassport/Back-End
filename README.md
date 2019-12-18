# Back-End

## Restaurant Passport
![alt text](https://cdn2.atlantamagazine.com/wp-content/uploads/sites/4/2019/07/RestaurantEugene01_courtesy.jpg "alt-text")

### PITCH
* Any foodie worth their weight in salt should always have ideas of where to eat in their home city whenever the opportunity arises (date night, a rare free night, girls night, bachelor party, etc.). If you are tired of defaulting to the same dive spot because of "decision fatigue" every week, RestaurantPassport is the solution. View the restaurants you've been to, have suggestions  at your fingertips for any occasion and taste, and brag to your friends about all the cool eateries you've been to!

### MVP
1. User can create/register an authenticated account as a `passportHolder` by providing the following: (web, mobile)
	* unique `username` - String
	* strong `password` - String
	* a `name` - String
	* a valid `city` - String
	* a valid and unique `email` - String

2. Authenticated `passportHolder` can read, update and delete `beenThere` restaurants from a `passport` (a list of all restaurants that they have visited). Each `beenThere` should have the following properties at a minimum: (web, mobile)
	
	* `restaurantName` - String
	* `streetAddress` - String
	* `city` - String
	* `zipcode` - String
	* `phoneNumber` - String
	* `websiteURL` - String/URL
	* `myRating` (1 thru 5) - Int
	* `notes` - String
	* `stamped` - Boolean


3. Authenticated `passportHolder` can create, update, view and delete `restaurant` from their `passport`. (mobile)

4. Authenticated `passportHolder` can mark that they visited a `beenThere` with `stamped` (which updates the view with a visual representation of a stamp or punch) (Mobile, web)

##### Track:
- bullet
- bullet

### STRETCH

##### Track:
1. Implement a feature to allow adding other cities besides the user's home city to their passport. (web, mobile)

2. Implement a feature to allow sharing your `passport` with friends. (mobile)

3. Leverage Yelp or the API of your choice to present the user with nearby restaurants to add to their `passport` (web/mobile)


### DESIGN LINKS / DATA SETS
- links

### Useful Docs
* [Culture Document](url)
* [Trello Board](https://trello.com/b/vaM1nrSn/build-week-restaurant-passport)
* [Schedule and Daily Milestones](url)

## Contributors


|                                      [Bradley Zickafoose](https://github.com/bradzickafoose)                                     | 
| :----------------------------------------------------------------------------------------------------------------------: | 
|      [<img src="https://avatars1.githubusercontent.com/u/52334965?s=460&v=4" width = "200" />](https://github.com/in/zickafoose)      | 
|      [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/in/zickafoose)                 | 
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/zickafoose/)  
