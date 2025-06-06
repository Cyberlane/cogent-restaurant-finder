# Cogent Lunch Finder

A simple web app for finding places to have lunch near the office.

## Description

This repository is my submission for a code assignment given to me (Justin Nel) by Cogent Labs.

## Features

- List restaurants within 1km of the office
  - Free text search
  - Filter by restaurant category
  - Filter by budget
  - filter by opening times
  - Sort by Relevance, Ratings, Distance or Popularity
- Results display in a list or on a map
- View restaurant details
  - Customer submitted photos
  - Customer photos
  - Opening times
  - Website link (when available)
  - Business Information (when available), such as phone number, etc
  - Restaurant on the map relevant to Cogent Labs office
  - Open in Google Maps to obtain directions

# Table of Contents

- [Tech Stack Choices](#tech-stack-choices)
- [Trade Offs](#trade-offs)
  - [Why Foursquare?](#why-foursquare)
  - [Where is Axios?](#where-is-axios)
  - [What about Storybook?](#what-about-storybook)
  - [Where are all the tests?](#where-are-all-the-tests)
- [Areas for Improvement](#areas-for-improvement)
  - [API Abstraction](#api-abstraction)
  - [Eating Options](#eating-options)
  - [Opening Hours](#opening-hours)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Testing](#testing)
- [Extra Credits](#extra-credits)

## Tech Stack Choices

Below you can read about the tech stack used within this project and the reasons for those choices.

### Dev Containers

I have these in as many projects as I can, so I can safely run a project with the current runtimes instead of having my host machine needing to install runtimes to be able to have intellisense and other functionality.

### Vite (Builds)

I personally have not touched WebPack in a number of years. I know my way around WebPack and a number of other builders, however I find Vite to be extremely performant, used in Production by many people and quite stable with a good community of plugins for any features you might want or need.

### Vitest (Testing)

Since I am using Vite, it just makes sense to use this when I am using Vite for building, plus it is very easy to use.

### Biome (Linting)

Biome is a lot faster than ESLint, stable and extremely simple to configure. Some of the rules I persoanlly do not agree with, so I adjust the config accordingly.

### Mantine UI

Given this was a simple project, I felt no need to create my own set of library of components.
I have used so many different UI libraries over the years, both paid and free, and this one I recently discovered,
it is extremely well documented and seems to have almost everything you need.

### Tailwind

Whenever I am doing rapid development, I jump to Tailwind. Once things get a bit more complex, I start to write my own CSS (I believe in simple first). I did not make use of it much, since Mantine UI had me covered for almost everything.

### Leaflet (Maps)

Google Maps is great, but it is quite heavy on the browser, plus you need to get an API key and I wanted to try keep this project as simple as possible. I did not need any advanced heavy features, I just wanted maps with markers, and this did the job perfectly.

### Tabler Icons

Icons were needed, and this recommended by Mantine UI, so I just went with it. I have no specific reason for this to be better or worse than any other.

### DayJS

Date formatting is a must, and this is my current go-to lightweight library.

### i18next

Being in Japan, multiple languages was a must, this is quite commonly used and stable, so I went with it. I have used others, including in-house solutions, but this is quick and easy to setup.

### TanStack Query

If I am going to communicate with an API, I need a good way to handle states of fetching/mutating data, and TanStack's solution is just one of my favourites. I used to roll my own, but this one covers everything I need without me needing to maintain it.

### TanStack Router

There are so many different router solutions for React, and this is one of the newest ones to arrive, so I decided to try it out since it has a number of tools which gives you additional type safety. I did not fully make use of all of it's features, but my first impressions are that I like it.

### Zustand

A simple Context could have solved what was needed, but I like Zustand because it is light weight and very quick to do what I need, so I used it instead. Less boilerplate, just quick to use.

### GitHub Actions

The code is already on GitHub, why not just use the free actions for CI/CD?

### Firebase (Hosting)

Hosting a simple static web app is quick and easy on Firebase, especially since you can configure the route redirections with some small config file settings.

## Trade-Offs

### Why FourSquare?

When I first received this assignment, my initial thought was to make use of Tabelog, however they do not provide any public API that I could easily make use of. So since the assignment was kind enough to suggest FourSquare, and they have relatively good documentation, I decided to just use it.

Unfortunately the quality of the data on FourSquare is not amazing, they tell you how many reviews a restaurant has but they do not give you the data for them (I believe they want you to redirect traffic to their own site to see those). A lot of data is outdated (some websites or links to menus are broken).

There were a few other small strange issues, but without spending too long doing better research about which APIs are good within Japan, I went with FourSquare.

### Where is Axios?

I made use of native fetch for all the API calls, sure I could have used axios, but I wasn't doing anything complex which gave a reason for increasing the payload size. When dealing with frontend code, I want to try and keep the bundle as small as possible. Axios is great, it has a lot of great features and middleware, but I did not need any of them for this project.

### What about Storybook?

I did not design any of the components, I am using entirely a pre-made library and composing them in a way that I need. I saw no need to complicate matters by including Storybook, but I feel this is something I would have had a team discussion about to see if anybody else saw value in it.

### Where are all the tests?

I only included a few small unit tests, there are a number more I could add, but I did not have enough time to add them all. However, I am purely talking about unit tests. I could add some E2E (end to end) tests to confirm communication towards the API is working, but since it's a third party API and I am actively testing with CI, I saw no need in this instance.

Outside of that, I feel testing on the frontend is quite a tricky subject. Some teams feel there is no value since the tests are slowing you down from doing any quick changes to the UI/UX. Whilst some other teams feel they need all the testing, especially with browser snapshots to ensure everything is as expected.

Since it was not vital for this given project, I felt I would leave it out but write about it instead.

## Areas for Improvement

### API Abstraction

Further abstraction from FourSquare and try to have standardized types, this way it would be easy to replace FourSquare with something else later on, or even have an option to fetch data from different sources.

### Eating Options

The assignment was asking for `Lunch`, however to not have pages too empty I added in the following:

![Food Options](/docs/images/eating-options.png)

So realistically, this could be removed and instead a data filter could be made on restaurants that offer "Lunch", and if they say "No" on lunch, to simply not show them in the search results.

### Opening Hours

Sometimes the data provided by `Opening Hours` from the API, is messy since the restaurant might close more than once per day, or even is open 24/7, so the data tends to render a bit confusingly. See below:

![Opening Hours Multi](/docs/images/opening-hours-multi.png)

There are a number of ways to render this better, but this tends to be an area I like to open a discussion and see what people think is best. Common ways I have seen are making a horizontal bar chart with gaps where the restaurant is closed (or even different colours), another would be to group the hours into chunks.

Most of which might need some pre-processing of the data, which would fall nicely into a helper function with some unit tests.

### Office on the Map

I tried to make the office on the map stand out a bit by making the marker a different colour, but it is far from obvious as you can see below. I think there are a few different ways to try solve this, one is using a different map (or looking to see if you can change the colours used by the current map), so you can add Markers which stand out better.

![Office on the Map](/docs/images/office-map.png)

### Scroll to Top

When there are a lot of results on a single page, it's often a good idea to have a little "scroll to top of page" button floating on the right of the page.

## Project Structure

Below is a tree structure matching the `/src` folder contents, which links to my explanation about the project structure.

- [/api/*](#srcapi)
- /assets
  - [/locales/*](#assetslocales)
  - [/images/*](#assetsimages)
- [/common/*](#common)
- [/components](#components)
- [/features](#features-1)
- [/hooks](#hooks)
- [/pages](#pages)
- [/routes](#routes)
- [/store](#store)
- [/styles](#styles)
- [/test](#test)
- [/types](#types)
- [/utils](#utils)
- [/constants.ts](#constantsts)
- [/main.tsx](#maintsx)
- [/routeTree.gen.ts](#routetreegents)
- [/theme.ts](#themets)

### /api/*

When there is no package for speaking to a third party API (99% of the time, this is the case), I like to have a the calls I am going to make, along with any relevant API keys, authentication, etc, all handled within an isolated little set of files. This could be individual functions or a class in this instance, but there is no reasoning behind that decision beyond I thought it looked a little cleaner.

### /assets/locales/*

All of the translation files live in this folder, following pretty standard i18next structure.

### /assets/images/*

Static images that are bundled within the codebase, I put in this folder. If there is a lot of them and they have to live in this repo (maybe they are part of the UI for the app), I often like to group them in sub-folders.

### /common/*

I like to keep files common to the entire application in here. I have a habit of putting the [constants.ts](#constantsts) file in the `/src` folder on it's own, but it could realisitically live in here to be consistant.

### /components/*

In my mind, the difference between a `component` and a `feature` is that a `component` is dumb, no access to an API and purely renders what you tell it to do, whilst a `feature` makes use of `components`, `hooks`, `apis` and whatever else it needs to create a specific feature for the website.

Whenever I need to make some utilities with the component which might be needed by `features`, I put them in a neighbouring file. For example: `MyComponent.tsx` will get `MyComponent.utils.ts`, this keeps them grouped together in name and in the file list. Similarly, if I need any special CSS for a given component I would create `MyComponent.module.css`, and `vite-css-modules` will automatically generate a `.d.ts` to give you TypeScript types for the CSS file, making it easier to work with.

### /features/*

In here you will find a number of sub-folders, and in those would be some React components. I try to keep all the React components small, so they are split into their own files, but I need to keep them neatly grouped together, so I keep them within a common folder.

Similar to the `components`, if I need to create any common utilities or CSS files, I will follow the same pattern mentioned for `components`.

### /hooks/*

These are just React Hooks, not to be confused with Data Stores found in `/store/*`.

However, a hook could be calling data from Data Stores, or fetching from an API like TanStack Query, and returning the results.

### /pages/*

Each page gets it's own component, and those are found here. These compose a number of features along with some UI layout to create a page.

### /routes/*

The TanStack Router routes are all configured here. The majority of the files are small and simple, and then are linked to a file in `/pages/*`.

### /store/*

Data Stores, in this case managed by Zustand.

### /styles/*

Global styles are put in here, currently since they are very simple, I have put all the imports in same file for simplicity.

### /test/*

Unit tests go in here, they tend to be testing utility functions.

### /types/*

Global types will go here. The majority of the types I needed to construct were for the FourSquare API, so that is why there is only a `foursquare.type.ts` file in here. Please note I also follow a naming pattern of `*.type.ts` to make it very clear when looking a filename if it contains type structures or logic.

### /utils/*

Global utility functions that are unrelated to any specific component, just useful for anything from formatting dates a specific way, to performing common math.

### /constants.ts

Not to be confused with values from environment variables, but any time there are common values within the app that do not change, I like to keep them in this constants file. This could be numbers used for math, strings for some fields that do not get translated, or anything else along those lines.

### /main.tsx

Entry point into the application. You will also find all of the Providers here as well.
Sometimes the providers are split out into a `App.tsx` file, but for simplicity I kept them in one file.

### /routeTree.gen.ts

This file is generated by TanStack Router.

### /theme.ts

Theme config used by Mantine, Tailwind or whichever CSS library/framework the app makes use of. In this instance it's a mixture of Tailwind and Mantine UI.

## Getting Started

### Prerequisites

If you want to run within the DevContainer, all you need is:

- Docker
- Docker Compose

If you want to run outside of the DevContainer, all you need is:

- NodeJS v22
- NPM

You will also need an API key from FourSquare.

### Setup

Before running anything, copy the `.env.example` to `.env` and then populate with the FourSquare API key along with the Lat/Lng of the office.

After that is done, you need to install the node dependencies with:

```bash
npm ci
```

#### Running locally

Quickly booting up and running in Dev Mode:

```bash
npm run dev
```

Alternatively, you can view the website here: [https://cogent-labs-lunch.web.app/](https://cogent-labs-lunch.web.app/)

## Usage

Open the website, by default you will see all results for restaurants within 1km of the office in a `List`. If you rather see those in a `Map`, you can click on the `Map` tab as seen below.

![List and Map of results](/docs/images/list-map.png)

Searching for results is pretty straight forward, type in whatever keywords you want and they will reach the FourSquare API.

The `I'm Feeling Lucky` button will randomly pick a restaurant from the results in your search results. This does not randomise the search, it makes use of your current search results. I did consider making it do random based on all restaurants, but then I thought personally, I often think "I know I want sushi, but I have no idea where I want to eat", so it makes use of your existing filters.

You can filter by Restaurant Category (these are provided by FourSquare). I included the `Food Stand` option with no results on purpose, to simply show how I handle `No Restaurants Found`.

Budget from the FourSquare API allowed you to use a min/max range for pricing, but honestly, I think the UI/UX for handling that range can be tricky, so I went the simple route and allowed the user to say `Any` or `Specifically this price`.

The `Pick a date and time` filters restaurants that are open at the date/time specified. By default this will populate with the current date and time from your browser. You can easily pick another time or day, and it will filter via the API, and if you want to resort to "now", just press the `Blue reset` button on the right.

![Reset date/time](/docs/images/reset-time.png)

## Testing

There are very minimal unit tests in place, but you can run them with:

```bash
npm run test
```

## Extra Credits

Flags for the language picker were taken from here: [https://hatscripts.github.io/circle-flags/gallery.html](https://hatscripts.github.io/circle-flags/gallery.html)

SVG icons for the pin markers on the maps were taken from here: [https://www.svgrepo.com/vectors/map/filled/4](https://www.svgrepo.com/vectors/map/filled/4)

## License

  MIT