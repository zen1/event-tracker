# Event Tracker

[![Test](https://github.com/zen1/event-tracker/workflows/Test/badge.svg)](https://github.com/zen1/event-tracker/actions)

[![Publish](https://github.com/zen1/event-tracker/workflows/Publish/badge.svg)](https://github.com/zen1/event-tracker/actions)

## A simple library for tracking and counting events

---

### Installation

---

> **NOTE If you have any issues installing or running the package, please check
> the troubleshooting notes below**

#### Easy Install

1. Create a file in the root of your project and name it .npmrc (If you already
   have an .npmrc file then skip to step 2)
2. Add `registry=https://npm.pkg.github.com/zen1` to your new .npmrc file
   > This file will set your project up to check the Github packages registry
   > first. If it can't find the package in the Github registry, then it will
   > search the NPM registry. This allows the use of packages from Github's
   > registry as well as NPM. For more info check the documentation
   > [here](https://help.github.com/en/packages/using-github-packages-with-your-projects-ecosystem/configuring-npm-for-use-with-github-packages)
3. In your project run `npm install @zen1/event-tracker`
4. If the package installed properly, then you should be able to import it and
   use it within your project. See [Documentation](#documentation) below to use
   the package.

#### Manual Install

1. Clone the repository to your local machine
2. Run `npm build` within the event-tracker root directory
3. Copy the dist folder to a folder in your project (name it event-tracker or
   something memorable)
4. Point your import statements to that folder and start using the library as
   outlined in the [Documentation](#documentation)

### Documentation

---

Creating a new instance

Available methods

### Troubleshooting
