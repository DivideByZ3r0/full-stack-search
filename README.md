# Accommodation Search

## Technical Coding Test

This project has a simple setup with an api, hooked up to MongoDB and a frontend piece initiated with [vite](https://vitejs.dev/).

## Install and run

From the project root:

```
npm install
```

### Run

Once install has finished, you can use the following to run both the API and UI:

```
npm run start
```

### API

To run the API separately, navigate to the `./packages/api` folder

```
$ cd packages/api
```

And run the `api` server with

```
$ npm run dev
```

The API should start at http://localhost:3001

### Client

To run the `client` server separately, navigate to the `./packages/client` folder

```
$ cd ./packages/client
```

And run the `client` with

```
$ npm run start
```

The UI should start at http://localhost:3000

### Database connection & environment variables

By default, the code is set up to start and seed a MongoDB in-memory server, which should be sufficient for the test. The database URL will be logged on startup, and the seed data can be found at ./packages/api/db/seeds.

If this setup does not work for you or if you prefer to use your own MongoDB server, you can create a .env file. In the ./packages/api folder, create a .env file (or rename the existing .env.sample) and fill in the environment variables.

## Task at hand

When the project is up and running, you should see a search-bar on the screen. This one is currently hooked up to the `/hotels` endpoint.
When you type in a partial string that is part of the name of the hotel, it should appear on the screen.
Ie. type in `resort` and you should see some Hotels where the word `resort` is present.

You will also see 2 headings called **"Countries"** and **"Cities"**.

The assignment is to build a performant way to search for Hotels, Cities or Countries.
Partial searches will be fine. Hotels will need to filterable by location as well.
Ie. The search `uni` should render

- Hotels that are located in the United States, United Kingdom or have the word `uni` in the hotel name.
- Countries that have `uni` in their name Ie. United States, United Kingdom
- No Cities as there is no match

Clicking the close button within the search field should clear out the field and results.

When clicking on one of the `Hotels`, `Cities` or `Countries` links, the application should redirect to the relevant page and render the selected `Hotel`, `City` or `Country` as a heading.

### Limitations

Given the time constraints, we do not expect a fully production-ready solution. We're primarily interested in the approach and the overall quality of the solution. 
Feel free to modify the current codebase as needed, including adding or removing dependencies. 
For larger or more time-intensive changes, you're welcome to outline your ideas in the write-up section below and discuss them further during the call.

<img src="./assets/search-example.png" width="400px" />

### Write-up

<!-- Write-up/conclusion section -->
How to start
Steps to start the app:

To install packages run `npm install`

To populate database with seeder data `npm run seed --workspace=api`

To start the apps `npm start dev`

What i've did:

Since this is my first monorepo I had a blast. Let my imagination go whild and started piling up features. That was probably a mistake but it was fun. Lets summarise it:

I believe that everyapp needs a good foundation, and its better to set up things properly instead of patching up things later. 

Frontend: 
Routing: I have added react router 6 with router object in /routes/router.tsx page. 
Its a basic router object, relying on <Outlet /> for layout component.  
I'm not paticullary good at the design but I patched up some navigation on top. 

Search page is home page, and its most important feature. I reworked your search component a but, atomising "searchg dropdown" and utilising useClickOuside hook to close it. There are few functionality I have changed you changed. 

There are pages for paticular city, state and hotel, rendering only name. I wanted to make it prettier but i was lacking time.
Potential for improvement:  Better design, more data about cities, hotels or countries.

I've also added pages for all cities, states and hotels. Its not required but made sense in my head. Because Im lacking time i havent finioshed it, but each item (country, citty or a hotel) should lead towards page for it.
Potential for improvement:  Better design.

For the fetching i created basic axios instance, and frontend service with all fetching functions. I handled loading, error and fetching with basic promise api (then, catch, finally), i found it easyer to write it that way.
Potential for improvement:  Utilising react query library, for frontend caching

useSearch hook is main hook of the app. All search logic is done there. IT uses debounce from lodash so it wont overload server with tons of request. I've also added for search to be triggered only if input has 2 or more caracters (also sort of  debounce).






Frontend improvements and features: 
1. Create axios singleton, can be ecapusulated if need arise. 
2. Create all request with type safety.
3. Share Types between frontend and backend
4. Create full search page results
5. Add query so searches can be shared
6. Create router with react router
7. Create better .env file
8. create env variable constants manager
9. use vite way to get variables
10. Conenct state if opend with hotels in set states and cities. 
11. Add keyboard control to the search bar
12. make form for adding hotels if time allows
13. Toaster and error boundry for error handling
14. tests

Backend improvements and features:
1. Create routes with express router
2. Agregate search result in search 
3. Create route for  cities and  a city 
4. Create route for  states and  a state
5. Create route for  hotels and  a hotel
6. Create route for  hotel and  a hotels
7. Create route for  hotels and cities in a state
8. Create route for  hotels and in a city
9. Bonus: try to find some additional infromation about city or a state with some free api as a gateway
10. Error handling 
11. Logging with morgan
12. tests



_When all the behaviour is implemented, feel free to add some observations or conclusions you like to share in the section_

### Database structure

#### Hotels Collection

```json
[
  {
    "chain_name": "Samed Resorts Group",
    "hotel_name": "Sai Kaew Beach Resort",
    "addressline1": "8/1 Moo 4 Tumbon Phe Muang",
    "addressline2": "",
    "zipcode": "21160",
    "city": "Koh Samet",
    "state": "Rayong",
    "country": "Thailand",
    "countryisocode": "TH",
    "star_rating": 4
  },
  {
    /* ... */
  }
]
```

#### Cities Collection

```json
[
  { "name": "Auckland" },
  {
    /* ... */
  }
]
```

#### Countries Collection

```json
[
  {
    "country": "Belgium",
    "countryisocode": "BE"
  },
  {
    /* ... */
  }
]
```
