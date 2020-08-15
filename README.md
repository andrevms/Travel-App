# FEND-Capstone---Travel-App

This project requires me to build out a travel app that, at a minimum, obtains a desired trip location & date from the user, and displays weather and an image of the location using information obtained from external APIs. 

## Build and running

### Prod
1. Redefine .env.default to .env and fill it with your API keys
2. To build production mode : npm run build-prod
3. After build, start project with : npm run start

### Dev
1. Redefine .env.default to .env and fill it with your API keys
2. To build and run dev mode: npm run build-dev

### Test
1. Redefine .env.default to .env and fill it with your API keys
2. To run tests : npm run test

## Inputs
* City : <String> - City name
* Country : <String> - city Country name in ISO 3166-1 alpha-2 [Country-Code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
* Data : <date> - day of the trip
