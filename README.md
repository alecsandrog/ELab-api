<h1 align="center">Backend API NodeJS | E-Lab</h1>


## About

<p>An API for medical exam control system </p>

<h4 align="center"> 
	 Status: In progress
</h4>


## Tech Stack

This project was developed using the following technologies:

#### [NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

- [Express](http://expressjs.com/)
- [TypeORM](https://typeorm.io/#/) 
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Swagger](https://swagger.io/tools/swagger-ui/)
- [tsyringe](https://github.com/Microsoft/tsyringe)
- [Jest](https://jestjs.io/)
- [Docker](https://www.docker.com/)
- [PostgreSQL](https://www.postgresql.org/)


#### Running the API

```bash

# Clone this repository
$ git clone https://github.com/alecsandrog/ELab-api.git && cd ELab-api

# install the dependencies
$ yarn install

# Run the docker config
$ docker-composer up

# Run the migrations
$ yarn typeorm migration:run

# Run the application in development mode
$ yarn dev

# The server will start at port: 3333 - go to http://localhost:3333/

```




