# Agile development for Vue.js with Docker and webpack.

This is a boilerplate for Vue.js projects using docker-compose for development/production and webpack for compile the sources.

## Development
In the development environment webpack runs as a http server that compiles all the app on the fly and updates the connected browsers using hot module replacemente.

You can run `docker-compose up` and in a few minutes your development environment will be up and running.

## Production
In the production environment webpack runs at the start and compiles the whole app in the dist folder. Then we start a worker running an express servr for each CPU available.

For run it just write `docker-compose -f docker-compose-prod.yml up` on the command line.
