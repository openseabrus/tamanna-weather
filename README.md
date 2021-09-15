# Tamanna-Weather

[![CircleCI](https://circleci.com/gh/openseabrus/tamanna-weather/tree/main.svg?style=svg&circle-token=92a17c9204882688dfe5f4b8dee8b1ab92777a30)](https://circleci.com/gh/openseabrus/tamanna-weather/tree/main)

Frontend implementation for the Tamanna Weather App challenge

# Table of Contents

- [Tamanna-Weather](#tamanna-weather)
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Configuration](#configuration)
- [Building](#building)
  - [Local](#local)
  - [Docker](#docker)
- [Running](#running)
  - [Local](#local-1)
  - [Docker](#docker-1)
- [Testing](#testing)
- [Deployments](#deployments)
  - [Public Instance](#public-instance)

# Features

A few of the things you can do with this app:

- Get your current location's weather conditions (or Lisbon's, if you do not give consent to accessing your location)

- Add your favorite cities to a list (or delete them)

- See the weather conditions for your favorite cities

# Configuration

Please create a .env file so that it contains your OpenWeatherMap API Key. (You can check an example file on .env.example)

# Building

First, you need to make sure you have Node and yarn installed.

Then, you should always do a yarn install:

```sh
yarn install
```

If you are running the app on development mode, you may skip the following building step.

## Local

```sh
yarn run build
```

## Docker

For Docker, the best and easiest way to build is doing it through docker-compose:

```sh
docker-compose build
```

Alternatively, if you want to build the docker image yourself:

> I'll be using **open1904** and **tamanna-weather-app** as an example.

Feel free to change to meet your requirements. (Adjust the docker-compose.yml and/or Dockerfile files if you choose
to do so)

```bash
docker build --build-arg REACT_APP_OPENWEATHERMAP_API_KEY='YOUR_KEY_GOES_HERE' -t open1904/tamanna-weather-app .
```

# Running

## Local

If you just wish to have a running instance for development purposes, run the following command:

```sh
yarn start
```

It should open a browser tab when the startup is done, pointing to http://localhost:3000

If you wish to serve the generated static files from the previous [building step](#building), you may do so through
"serve" (not part of package.json) or another equivalent alternative:

```sh
serve -s build
```

## Docker

For Docker, it's recommended that you run the docker-compose command:

```bash
docker-compose up
```

Alternatively, you may run the previously built container like so:

```sh
docker run -p 80:80 open1904/tamanna-weather-app
```

# Testing

In order to run the tests included in the project, run the following command:

```bash
yarn test
```

# Deployments

Every time there is a commit on this repo, Circle CI comes into action.

First, it tests and builds the code.

If everything is fine, a docker image is pushed to Docker Hub, and also to Heroku.

## Public Instance

You can access a public instance of this project at https://tamanna-weather.herokuapp.com/ which should always have the latest code deployed.

---

At this point you should be able to access my solution to this challenge.

The application is by default available at http://<LOCAL_IP>

If you ran everything on your machine, using the defaults, the application should be available at http://localhost (or http://0.0.0.0).

If you ran it on development mode, you can access it on http://localhost:3000 by default.

Try adding some cities and see how they work!
